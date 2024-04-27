


 export const STRtoCoded=(str)=>{

    const CONSTANTS={
        'a':'sfgfgv',
        'b':'fdsfvgv',
        'c':'sdfsdf',
        'd':'jbyuguhdsy',
        'e':'djhfdsfds',
        'f':'lokbjvuvds',
        'g':'56dksbuygyd',
        'h':'dnkjbksf5',
        'i':'svshbhds5',
        'j':'dsf7dsfb9sdygv',
        'k':'lkidb7854fjbjfd6',
        'l':'likdhjd3y76sd',
        'm':'loidfbshjvjtsdf',
        'n': 'sdfbjvstfycfd',
        'o':'operaminidfkjhv786',
        'p':'dfkjbkvhsd45',
        'q': 'dhjdsfsjhvt',
        'r':'sdfkjvvksddfgsh',
        's':'sfsjhfvuvhvsg',
        't':'sfjsdvjvsdg',
        'u' :'dfsjhvsdggd',
        'v' :'askakfbbbjvsdf',
        'w' :'6841549fsfsf6846',
        'x' :'fsfs6514846sd84454fsd',
        'y' :'fdssdfssafs5f454489safd',
        'z' :'dfsdfjhsjcgsvfsdvgvgvfjsvfsfds',
        "'":'sdfsdsfasfsgsdsgfsgsagsgfsgfgs',
        ' ':'----',
        '1':'5645955168',
        '2':'66864486486468',
        '3':'3569856',
        '4':'53646645654647',
        '5':'15454846844',
        '6':'fsdfas6545sd',
        '7':'78958648',
        '8':'45818648',
        '9':'56848616848664684',
        '0':'84861811818',
        '/':'dssgdfsgdds45/',
        '*':'hupilot',
        '-':'copilot',
        '+':'gsgdfshfghgfj++',
        '@':'dog',
        '.':'dot'
    }
    const codedSTR=[]
    const splitted=str.split("")
    for(let i in splitted){
    codedSTR.push(CONSTANTS[`${splitted[i]}`])
    }
    return codedSTR.join('=>')
}

 export const Decode=(str)=>{

    const SWAPPED_CONSTANTS = {
        'sfgfgv': 'a',
        'fdsfvgv': 'b',
        'sdfsdf': 'c',
        'jbyuguhdsy': 'd',
        'djhfdsfds': 'e',
        'lokbjvuvds': 'f',
        '56dksbuygyd': 'g',
        'dnkjbksf5': 'h',
        'svshbhds5': 'i',
        'dsf7dsfb9sdygv': 'j',
        'lkidb7854fjbjfd6': 'k',
        'likdhjd3y76sd': 'l',
        'loidfbshjvjtsdf': 'm',
        'sdfbjvstfycfd': 'n',
        'operaminidfkjhv786': 'o',
        'dfkjbkvhsd45': 'p',
        'dhjdsfsjhvt': 'q',
        'sdfkjvvksddfgsh': 'r',
        'sfsjhfvuvhvsg': 's',
        'sfjsdvjvsdg': 't',
        'dfsjhvsdggd': 'u',
        'askakfbbbjvsdf': 'v',
        '6841549fsfsf6846': 'w',
        'fsfs6514846sd84454fsd': 'x',
        'fdssdfssafs5f454489safd': 'y',
        'dfsdfjhsjcgsvfsdvgvgvfjsvfsfds': 'z',
        'sdfsdsfasfsgsdsgfsgsagsgfsgfgs': "'",
        '----': ' ',
        '5645955168': '1',
        '66864486486468': '2',
        '3569856': '3',
        '53646645654647': '4',
        '15454846844': '5',
        'fsdfas6545sd': '6',
        '78958648': '7',
        '45818648': '8',
        '56848616848664684': '9',
        '84861811818': '0',
        'dssgdfsgdds45/': '/',
        'hupilot': '*',
        'copilot': '-',
        'gsgdfshfghgfj++': '+',
        'dog':'@',
        'dot': '.'
    };
    
    
    
    

const decodedSTR=[]
const splitted=str.split('=>')
for(let i in splitted){
    decodedSTR.push(SWAPPED_CONSTANTS[`${splitted[i]}`])
}
return decodedSTR.join('')
}
