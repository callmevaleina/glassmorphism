const glassElement = document.querySelector('.glass-element');
console.log(glassElement);

const appLeft = document.querySelector('.app-left')

const color = document.querySelector('.color');
console.log(color);

const opacity = document.querySelector('#opacity');
console.log(opacity);

const blur = document.querySelector('#blur');
console.log(blur);

const saturation = document.querySelector('#saturation');
console.log(saturation);

const contrast = document.querySelector('#contrast');
console.log(contrast);

const size = document.querySelector('#size');
console.log(size);

const radius = document.querySelector('#radius');
console.log(radius);

const valueOpacity = document.querySelector('.value-opacity');

const valueBlur = document.querySelector('.value-blur');

const valueSaturation = document.querySelector('.value-saturation');

const valueContrast = document.querySelector('.value-contrast');

const valueSize = document.querySelector('.value-size');

const valueRadius = document.querySelector('.value-radius');

const cssCodeContainer = document.querySelector('.css-code-container')



let rgb;

let valuesCode = [];
let radiusCode;
let backgroundCode;
let backdropFilterBlur;
let backdropFilterSaturation;
let backdropFilterContrast;


function hexToRgb(hex){
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
};

function insertHtml (radiusCode = '20', backgroundCode = 'rgba(255, 255, 255, 0.1)', backdropFilterBlur = '2', backdropFilterSaturation = '70', backdropFilterContrast = '70'){
    cssCodeContainer.innerHTML = ` <p> .glass {</p>
    <p> background: ${backgroundCode}</p>
    <p> backdrop-filter: blur(${backdropFilterBlur} px)</p> <p> saturate(${backdropFilterSaturation}%) </p> <p> contrast(${backdropFilterContrast}%) </p>
    <p> border-radius: ${radiusCode} px</p>
    <p>}</p>`
    ;

};

color.addEventListener('input', (e)=>{
    rgb = hexToRgb(e.target.value)
    let rgba = `rgba(${rgb}, ${opacity.value})`
    console.log(rgba);
    glassElement.style.background = rgba
    backgroundCode = rgba
    insertHtml()
    
});


opacity.addEventListener('input', (e) =>{
    let a = (e.target.value).toString()
    let rgba = 'rgba('+ rgb + ',' + a +')'
    glassElement.style.background = rgba
    console.log(rgba);    
    valueOpacity.value = `${e.target.value}%`
    console.log(e.target.value);

});

blur.addEventListener('input', (e)=>{
    glassElement.style.backdropFilter = `blur(${e.target.value}px)`
    glassElement.style.webkitBackdropFilter = `blur(${e.target.value}px)`
    valueBlur.value = `${e.target.value}px`
    backdropFilterBlur = e.target.value
    insertHtml()
    
}); 

saturation.addEventListener('input', (e)=>{
    glassElement.style.backdropFilter = `saturate(${e.target.value}%)`
    glassElement.style.webkitBackdropFilter = `saturate(${e.target.value}%)`
    valueSaturation.value = `${e.target.value}%`
    backdropFilterSaturation = e.target.value
    insertHtml()
    
}); 

contrast.addEventListener('input', (e)=>{
    glassElement.style.backdropFilter = `contrast(${e.target.value}%)`
    glassElement.style.webkitBackdropFilter = `contrast(${e.target.value}%)`
    valueContrast.value = `${e.target.value}%`
    backdropFilterContrast = e.target.value
    insertHtml()
}); 


size.addEventListener('input', (e)=>{
    glassElement.style.width = `${e.target.value}px`
    glassElement.style.height = `${e.target.value}px`
    valueSize.value = e.target.value
}); 

radius.addEventListener('input', (e)=>{
    glassElement.style.borderRadius = `${e.target.value}px`
    valueRadius.value = `${e.target.value}px`
    radiusCode = e.target.value
    insertHtml()
    
}); 




