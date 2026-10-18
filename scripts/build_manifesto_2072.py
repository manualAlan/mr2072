"""Typeset the 2072 LCA manifesto with sourced photographs and checked geometry."""
from pathlib import Path
from xml.sax.saxutils import escape
import hashlib
import json
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from manifesto_2072_content import SLOGAN, PROMISES, PAGES

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'output/pdf/Caprica_Your_Freedom_Your_Future_2072_Manifesto.pdf'
ASSETS = ROOT / 'assets/manifesto-2068'
AUDIT = ROOT / 'tmp/pdfs/manifesto-2072'
OUT.parent.mkdir(parents=True, exist_ok=True)
AUDIT.mkdir(parents=True, exist_ok=True)
W, H = A4
M = 43
CW = W - 2*M
NAVY = HexColor('#251B3F')
INK = HexColor('#302C38')
GRAY = HexColor('#655F6C')
BLUE = HexColor('#6544A0')
GREEN = HexColor('#DAC7F4')
TEAL = HexColor('#6544A0')
PALE = HexColor('#F0EBF5')
RULE = HexColor('#DDD6E4')
CREAM = HexColor('#F7F5F0')
LIGHT = HexColor('#E4DAEE')
ACCENTS = [BLUE, TEAL, TEAL]
for name, file in [('MR','Montserrat-Regular.ttf'),('MR-Bold','Montserrat-Bold.ttf'),('MR-Italic','Montserrat-Italic.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(ROOT/'assets/fonts/montserrat'/file)))
pdfmetrics.registerFontFamily('MR',normal='MR',bold='MR-Bold',italic='MR-Italic',boldItalic='MR-Bold')
c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
c.setTitle('Your Freedom. Your Future. | LCA Manifesto 2072-2076')
c.setAuthor("Liberal-Conservative Alliance")
c.setSubject('A programme for return to government after four years in opposition; 2072-2076')
c.setCreator('LCA campaign')
layout_log, photo_log, page_map = [], [], {}
photo_hashes = set()

def box(x,top,w,h,fill):
    c.setFillColor(fill)
    c.rect(x,H-top-h,w,h,fill=1,stroke=0)

def line(x1,top1,x2,top2,color=RULE,width=.7):
    c.setStrokeColor(color); c.setLineWidth(width)
    c.line(x1,H-top1,x2,H-top2)

def para(s,x,top,width,size=10,leading=None,color=INK,bold=False,max_h=None,align=0):
    if any(ch in s for ch in ['\u2014','\u2013','\u2011']):
        raise ValueError(f'Unsupported dash: {s}')
    style=ParagraphStyle('p',fontName='MR-Bold' if bold else 'MR',fontSize=size,
                         leading=leading or size*1.42,textColor=color,alignment=align,
                         allowWidows=0,allowOrphans=0)
    p=Paragraph(escape(s).replace('\n','<br/>'),style)
    _,height=p.wrap(width,1200)
    if max_h is not None and height>max_h+.1:
        raise ValueError(f'Page {c.getPageNumber()}: {height:.1f}>{max_h} :: {s[:120]}')
    if top+height>H-12:
        raise ValueError(f'Page {c.getPageNumber()}: text outside page :: {s[:70]}')
    p.drawOn(c,x,H-top-height)
    layout_log.append(dict(page=c.getPageNumber(),x=x,y=top,w=width,h=height,text=s))
    return top+height

def label(s,x,top,color=TEAL,width=CW,size=7.6):
    return para(s.upper(),x,top,width,size,10.4,color,True)

def photo(name,x,top,width,height,focus=(.5,.5),portrait=False,zoom=1):
    path=ROOT/'public/images'/name if portrait else ASSETS/name
    checksum=hashlib.sha256(path.read_bytes()).hexdigest()
    if checksum in photo_hashes:
        raise ValueError(f'Repeated photograph: {name}')
    photo_hashes.add(checksum)
    with Image.open(path) as im: iw,ih=im.size
    scale=max(width/iw,height/ih)*zoom
    # Embed print-quality copies, avoiding a large web download of full originals.
    image_dir=AUDIT/'images'
    image_dir.mkdir(exist_ok=True)
    factor=min(1,scale*200/72)
    size=(round(iw*factor),round(ih*factor))
    embedded=image_dir/f'{checksum[:16]}-{size[0]}x{size[1]}.jpg'
    if not embedded.exists():
        with Image.open(path) as im:
            im.convert('RGB').resize(size,Image.Resampling.LANCZOS).save(embedded,quality=87,optimize=True)
    dw,dh=iw*scale,ih*scale
    px=x-(dw-width)*focus[0]
    py=H-top-height-(dh-height)*(1-focus[1])
    c.saveState()
    clip=c.beginPath();clip.rect(x,H-top-height,width,height)
    c.clipPath(clip,stroke=0,fill=0)
    c.drawImage(str(embedded),px,py,dw,dh,mask='auto')
    c.restoreState()
    photo_log.append(dict(page=c.getPageNumber(),file=name,sha256=checksum,
                          x=x,y=top,w=width,h=height,source_size=[iw,ih],
                          effective_dpi=round(72*factor/scale),portrait=portrait))

def logo(x,top,w=42):
    c.drawImage(str(ROOT/'assets/lca_logo.png'),x,H-top-w,w,w,mask='auto')

def footer(section,dark=False):
    color=LIGHT if dark else GRAY
    line(M,H-42,W-M,H-42,HexColor('#58486F') if dark else RULE)
    label('LCA / 2072',M,H-29,color,70,6.7)
    para(section,M+84,H-29,CW-115,6.7,9,color)
    para(f'{c.getPageNumber():02}',W-M-25,H-29,25,7.4,9,color,True,align=2)

def start(key,title,dark=False):
    page_map[key]=c.getPageNumber()
    c.bookmarkPage(key)
    c.addOutlineEntry(title,key,0,False)
    box(0,0,W,H,NAVY if dark else white)
    if not dark:
        box(M,24,28,3,BLUE);box(M+32,24,28,3,GREEN)
        label(SLOGAN,M+76,20,GRAY,CW-76,6.8)

def end(section,dark=False):
    footer(section,dark);c.showPage()

def title(kicker,head,intro=None,size=30):
    label(kicker,M,58)
    para(head,M,83,CW,size,size*1.12,NAVY,True,max_h=73)
    if intro: para(intro,M,166,CW,10.4,15,GRAY,max_h=46)

def internal_link(key,x,top,width,height):
    c.linkRect('',key,(x,H-top-height,x+width,H-top),relative=0,thickness=0)

POLICY_PHOTOS={
    'housing':('housing-policy.jpg',(.50,.48),108),
    'tax':('tax-policy.jpg',(.50,.50),94),
    'enterprise':('enterprise-policy.jpg',(.50,.50),108),
    'work':('work-policy.jpg',(.52,.45),94),
    'schools':('schools-new.jpg',(.50,.40),108),
    'science':('research-new.jpg',(.50,.50),94),
    'intelligence':('gateway-policy.jpg',(.50,.50),108),
    'regions':('regions-policy.jpg',(.50,.55),94),
    'fiscal-rules':('fiscal-policy.jpg',(.50,.55),108),
    'funding':('funding-policy.jpg',(.50,.50),94),
    'health':('health-new.jpg',(.50,.45),108),
    'families':('families-policy.jpg',(.50,.48),94),
    'energy':('energy-policy.jpg',(.50,.96),108),
    'networks':('networks-policy.jpg',(.50,.48),94),
    'justice':('justice-policy.jpg',(.50,.42),108),
    'defense':('defense-policy.jpg',(.50,.48),94),
    'resilience':('resilience-policy.jpg',(.50,.50),108),
    'rights':('rights-policy.jpg',(.50,.48),94),
    'digital':('digital-policy.jpg',(.50,.48),108),
    'government':('government-policy.jpg',(.50,.48),94),
    'foreign':('foreign-policy.jpg',(.50,.46),108),
    'trade-migration':('trade-policy.jpg',(.50,.50),94),
}

def policy_page(p):
    start(p['id'],p['title'])
    title(f"0{p['part']+1} / {PROMISES[p['part']]}",p['title'],p['intro'],size=28)
    gap=25;col=(CW-gap)/2
    im,focus,image_h=POLICY_PHOTOS[p['id']]
    photo(im,M,222,CW,image_h,focus=focus)
    c.setStrokeColor(ACCENTS[p['part']]);c.setLineWidth(1.2)
    c.rect(M,H-222-image_h,CW,image_h,fill=0,stroke=1)
    top0=222+image_h+14
    stride=(786-top0)/3
    fs,leading=9.15,12.7
    for i,(head,body) in enumerate(p['entries']):
        x=M+(i%2)*(col+gap);top=top0+(i//2)*stride
        box(x,top,19,2.5,ACCENTS[p['part']])
        y=para(head,x,top+10,col,10.5,13.4,NAVY,True,max_h=28)
        para(body,x,y+6,col,fs,leading,max_h=stride-(y-top)-5)
    end(PROMISES[p['part']])


EXPECTED = {'cover':1, 'contents':2, 'case':3, 'choices':4, 'first100':5}
_page = 6
for _part in range(3):
    EXPECTED[f'part-{_part}'] = _page
    _page += 1
    for _p in PAGES:
        if _p['part'] == _part:
            EXPECTED[_p['id']] = _page
            _page += 1
EXPECTED.update(delivery=_page, closing=_page+1)


def cover():
    start('cover', 'Your freedom. Your future. / LCA 2072', True)
    label('LIBERAL-CONSERVATIVE ALLIANCE', M, 43, GREEN, CW-70)
    logo(W-M-45, 33, 45)
    para('YOUR\nFREEDOM.\nYOUR FUTURE.', M, 116, CW, 51, 57, white, True, max_h=176)
    box(M, 315, 65, 4, GREEN)
    para('A freer Caprica.\nA government you can trust.', M, 342, CW, 19, 26, GREEN, True)
    label('MANIFESTO 2072 / OUR PROGRAMME TO 2076', M, 421, LIGHT)
    photo('port.jpg', 0, 459, W, 290, focus=(.55,.5))
    box(0, 748, W, 94, NAVY)
    para('The case for a new LCA government.', M, 770, CW, 12.3, 17, white, True)
    label('LIBERTY / OPPORTUNITY / RESPONSIBILITY', M, 809, LIGHT, CW, 6.7)
    c.showPage()


def contents():
    start('contents', 'Inside the manifesto')
    title('THE CHOICE / 2072', 'A new mandate.\nA different direction.',
          'After four years in opposition, our programme starts with limits on power and a fair chance to build a life.')
    for i, (head,key) in enumerate([
        ('The case for change','case'), ('Three choices','choices'),
        ('The first 100 days','first100'), ('How we will be judged','delivery')
    ]):
        x=M+(i%2)*(CW/2+10); top=228+(i//2)*24; width=CW/2-12
        para(head,x,top,width-30,9.3,13,NAVY,True)
        para(f"{EXPECTED[key]:02}",x+width-28,top,28,9.3,13,TEAL,True,align=2)
        internal_link(key,x,top,width,18)
    gap=30; col=(CW-gap)/2
    for part,x,top in [(0,M,307),(1,M,510),(2,M+col+gap,307)]:
        label(f'0{part+1} / {PROMISES[part]}',x,top,TEAL,col,7.0)
        line(x,top+31,x+col,top+31)
        y=top+43
        for p in [p for p in PAGES if p['part']==part]:
            names={'rights':'Civil liberties','intelligence':'Intelligence and secrecy',
                   'government':'Integrity in government','digital':'Technology and your rights',
                   'justice':'Policing and justice','work':'A new settlement at work',
                   'enterprise':'Enterprise and competition','tax':'Tax and ownership',
                   'housing':'Homes and secure renting','schools':'Schools and early years',
                   'science':'Skills, science and fair entry','regions':'Regional opportunity',
                   'foreign':'CU reform and diplomacy','trade-migration':'Trade and migration',
                   'defense':'Defence and readiness','resilience':'National resilience',
                   'health':'Health and timely care','families':'Families, care and retirement',
                   'energy':'Energy and climate','networks':'Transport and infrastructure',
                   'fiscal-rules':'An honest fiscal starting point','funding':'Funding and implementation'}
            para(names[p['id']],x,y,col-28,8.8,13,INK)
            para(f"{EXPECTED[p['id']]:02}",x+col-25,y,25,8.8,13,TEAL,True,align=2)
            internal_link(p['id'],x,y,col,20)
            y+=25
    para('Commitments are proposals for the next Parliament.\nFunding conditions: pages 29-30.',M+col+gap,659,col,8.8,13,GRAY)
    end('Your guide to the programme')


def introduction():
    start('case', 'The case for a new LCA government')
    title('FOUR YEARS IN OPPOSITION', 'We are asking for\na new mandate.')
    body=[
        'In 2068, voters sent the LCA into opposition. We accept that verdict. Four years later, we are asking to earn your confidence with a programme for the country as it is now, and a clear account of what we would change.',
        'Caprica should be a place where your voice belongs to you, your work can take you further and your future does not depend on knowing an insider. A capable state should protect those freedoms and provide the foundations on which ordinary ambitions become possible.',
        "The government's intelligence and labour proposals would concentrate power beyond public scrutiny and impose more compulsory arrangements at work. Threats to leave the Columbian Union add uncertainty where our country needs steady partnerships. Caprica needs a government that protects security, opportunity and trust while respecting individual freedom.",
        'Our answer is practical. Put intrusive surveillance under judges. Make workplace representation voluntary and democratic. Share the cost of family leave fairly. Challenge rules that shelter incumbents. Build homes near jobs and transport. Negotiate CU reform while keeping our place at the table.',
        'Returning to government would not entitle us to unchecked power either. The safeguards in this manifesto would bind LCA ministers as firmly as their opponents. Independent courts, open contracts and honest accounts are commitments to the citizen, whoever wins the next election.',
        'We will begin with the books as they are, protect rights people have already earned and publish what each reform costs before committing money. We ask for the opportunity to govern with restraint, ambition and respect for the people who lend us their authority.'
    ]
    y=193
    for s in body:
        y=para(s,M,y,CW,10.1,15.1,max_h=83)+13
    line(M,y+3,M+65,y+3,GREEN,3)
    para('Liberal-Conservative Alliance',M,y+19,CW,13.5,19,NAVY,True)
    para('Your freedom. Your future.',M,y+47,CW,10,14,GRAY)
    end('A new mandate must be earned')


def flagships():
    start('choices', 'Three choices for a freer Caprica')
    title('THE DIFFERENCE YOUR VOTE MAKES', 'Put your future\nback in your hands.',
          'Our programme connects the freedom to disagree, the chance to get ahead and the confidence to plan a life.')
    cards=[
        ('01','LIBERTY','Power under law.',
         'Judges before intrusion. No parallel intelligence army. Independent scrutiny of secrecy and spending. These limits will apply to our own government.','intelligence'),
        ('02','OPPORTUNITY','A fair chance to begin.',
         'Secret workplace ballots. Shared leave insurance. Portable skills. A challenge to rules that keep new firms and qualified newcomers out.','work'),
        ('03','CONFIDENCE','Steady at home and abroad.',
         'Build more homes. Fund care honestly. Lead CU reform from within. Publish a new fiscal baseline and an accountable programme to 2076.','foreign'),
    ]
    for i,(num,unit,head,body,key) in enumerate(cards):
        top=240+i*176
        box(M,top,CW,155,PALE if i!=1 else CREAM)
        para(num,M+17,top+15,96,41,47,TEAL,True)
        label(unit,M+17,top+75,TEAL,104,7)
        line(M+128,top+16,M+128,top+139,RULE)
        para(head,M+146,top+18,CW-163,17,22,NAVY,True,max_h=45)
        para(body,M+146,top+52,CW-163,10,14.4,max_h=73)
        label(f"READ THE PLAN / {EXPECTED[key]:02}",M+146,top+132,TEAL,CW-163,6.5)
        internal_link(key,M,top,CW,155)
    end('Liberty. Opportunity. Responsibility.')


def first100():
    start('first100', 'The first 100 days', True)
    label('ON RETURNING TO GOVERNMENT',M,43,GREEN)
    para('Begin with\nlimits on power.',M,87,CW,37,43,white,True,max_h=90)
    para('The first 100 days are a timetable for action and introduced legislation. Parliament must scrutinise and approve changes to the law.',M,196,CW,10.5,15.5,LIGHT,max_h=49)
    rows=[
        ('01','Secure the record.', 'Order lawful preservation of intelligence and procurement records. Give independent inspectors access. Review disputed operations through existing legal authority, without interrupting essential protection.'),
        ('02','Open the books.', 'Commission an independent fiscal and liabilities audit for publication within 100 days. Release the verified housing baseline and a register of major public commitments.'),
        ('03','Bring the bills to Parliament.', 'Introduce liberty restoration, public integrity and fair-work legislation with clause-by-clause explanations. Publish transition protections for employees, existing claims and lawful security functions.'),
        ('04','Set a dependable course.', 'Publish the domestic consultation agenda for a CU Reform Compact, to be put forward within six months. Set first-budget priorities and a public register of manifesto commitments.')
    ]
    for i,(num,head,body) in enumerate(rows):
        top=288+i*112
        para(num,M,top,44,23,29,GREEN,True)
        para(head,M+64,top,CW-64,14,19,white,True)
        para(body,M+64,top+29,CW-64,9.9,14.2,LIGHT,max_h=61)
        if i<3:line(M+64,top+98,W-M,top+98,HexColor('#58486F'))
    end('Introduce. Scrutinise. Fund. Deliver.',True)


def divider(part):
    start(f'part-{part}',PROMISES[part],True)
    label(f'OUR PROGRAMME / 0{part+1}',M,44,GREEN)
    heads=['Liberty\nunder law.','Opportunity\nopen to\neveryone.','A country\nyou can\ncount on.']
    para(heads[part],M,107,CW,40,45,white,True,max_h=139)
    descriptions=[
        'Your private life. Your right to disagree. A government that has to answer for what it does.',
        'The first job. The new firm. A home of your own. A fair chance should not depend on who you know.',
        'Timely care. Reliable connections. Steady partnerships. Promises paid for honestly.'
    ]
    para(descriptions[part],M,278,CW,13,19,LIGHT,max_h=62)
    photo(['civic-new.jpg','homes.jpg','wind.jpg'][part],0,384,W,364,focus=(.5,.5))
    box(0,745,W,97,NAVY)
    label(['POWER THAT ANSWERS TO YOU','ROOM TO BUILD A LIFE','FOUNDATIONS THAT LAST'][part],M,766,GREEN)
    end(PROMISES[part],True)


def delivery():
    start('delivery', 'How we will be judged')
    title('THE TEST OF OUR NEXT TERM', 'Publish the promise.\nReport the result.',
          'The dates below are proposed milestones. Service expansions depend on voted funding, staffing and the safeguards in each policy chapter.')
    milestones=[
        ('2073','Make power visible.', 'Publish the automated-decision register, operating rules for new oversight bodies and open contracting information. Report the progress of liberty and employment legislation, including any provisions Parliament amends.'),
        ('2074','Make the first improvements usable.', 'Target the youth work and training offer, mental-health first-contact standard and carers\' respite offer. Publish service capacity, actual waits and unmet need. Test national continuity arrangements against the 30-day objective.'),
        ('2076','Judge the change in everyday life.', 'Aim for 50% more annual home completions than the verified 2072 baseline and a falling gross-debt-to-GDP ratio under normal conditions. Report real wages, business entry and service access without claiming control over every economic outcome.')
    ]
    for i,(year,head,body) in enumerate(milestones):
        top=242+i*136
        para(year,M,top,90,25,31,TEAL,True)
        para(head,M+114,top,CW-114,14,19,NAVY,True,max_h=39)
        para(body,M+114,top+34,CW-114,9.6,13.7,INK,max_h=83)
        line(M,top+121,W-M,top+121)
    para('Every quarter, an account you can challenge.',M,667,CW,14,19,NAVY,True)
    para('Name the responsible minister, publish the baseline and show delivery against each commitment. Independent auditors will test the evidence. Missed milestones need an explanation and a revised plan, not a renamed target.',M,698,CW,10,14.5,max_h=60)
    end('Accountability continues after election day')


def closing():
    start('closing','Vote LCA. Vote liberty.',True)
    photo('field.jpg',0,0,W,310,focus=(.5,.5))
    box(0,309,W,H-309,NAVY)
    label('THE CHOICE IN 2072',M,345,GREEN)
    para('Your freedom.\nYour future.',M,393,CW,40,47,white,True,max_h=100)
    para('A fair chance to build a life.\nA government you can trust.',M,521,CW,17,24,LIGHT,max_h=52)
    para('VOTE LCA.\nVOTE LIBERTY.',M,608,CW-70,31,37,GREEN,True,max_h=78)
    logo(W-M-54,620,54)
    para('Explore the programme and meet the team.',M,722,CW,9.5,14,white,True)
    para('manualalan.github.io/mr2072',M,745,CW,8.8,13,LIGHT)
    c.linkURL('https://manualalan.github.io/mr2072/',(M,H-765,W-M,H-719),relative=0,thickness=0)
    end('Liberal-Conservative Alliance / 2072 to 2076',True)


cover(); contents(); introduction(); flagships(); first100()
for part in range(3):
    divider(part)
    for p in PAGES:
        if p['part']==part:
            policy_page(p)
delivery(); closing()
assert page_map == EXPECTED, (page_map, EXPECTED)
c.save()
(AUDIT/'layout.json').write_text(json.dumps(layout_log,indent=2),encoding='utf-8')
(AUDIT/'photo-usage.json').write_text(json.dumps(photo_log,indent=2),encoding='utf-8')
(AUDIT/'page-map.json').write_text(json.dumps(page_map,indent=2),encoding='utf-8')
print(f'Created {OUT}')
print(f'{len(page_map)} pages; {len(layout_log)} measured text blocks; {len(photo_log)} unique photographs')
