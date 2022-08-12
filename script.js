const glassElement = document.querySelector('.glass-element');
console.log(glassElement);

const appLeft = document.querySelector('.app-left')

const color = document.querySelector('.color');
console.log(color);

const opacity = document.querySelector('#opacity');
console.log(opacity);

const blur = document.querySelector('#blur');
console.log(blur);

const size = document.querySelector('#size');
console.log(size);

const radius = document.querySelector('#radius');
console.log(radius);

const valueOpacity = document.querySelector('.value-opacity');

const valueBlur = document.querySelector('.value-blur')

const valueSize = document.querySelector('.value-size')

const valueRadius = document.querySelector('.value-radius')



let rgb;

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    c= hex.substring(1).split('');
    if(c.length== 3){
        c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c= '0x'+c.join('');
    return [(c>>16)&255, (c>>8)&255, c&255].join(',');
    }
    throw new Error('Bad Hex');
}

color.addEventListener('input', (e)=>{
    rgb = hexToRgbA(e.target.value)
    let rgba = `rgba(${rgb}, ${opacity.value})`
    console.log(rgba);
    glassElement.style.background = rgba
    
});


opacity.addEventListener('input', (e) =>{
    let a = (e.target.value).toString()
    let rgba = 'rgba('+ rgb + ',' + a +')'
    glassElement.style.background = rgba
    console.log(rgba);    
    valueOpacity.value = `${e.target.value}%`

});

blur.addEventListener('input', (e)=>{
    glassElement.style.backdropFilter = `blur(${e.target.value}px)`
    valueBlur.value = `${e.target.value}px`
}); 

size.addEventListener('input', (e)=>{
    glassElement.style.width = `${e.target.value}px`
    glassElement.style.height = `${e.target.value}px`
    valueSize.value = `${e.target.value}px`
    console.log(e.target.value);
}); 

radius.addEventListener('input', (e)=>{
    glassElement.style.borderRadius = `${e.target.value}px`
    valueRadius.value = `${e.target.value}px`
}); 





