<script setup>
import { ref, onBeforeMount } from 'vue';

const randomCode = ref('');

const generateRandomCode = () => {
  return Math.floor(Math.random() * 1000000).toString();
};

onBeforeMount(() => {
  randomCode.value = generateRandomCode();
});
</script>

<template>
    <div>
        <div class="row-5fo title-6dj">
            Sign in
        </div>
        <div class="row-5fo text-tzo">
            <p class="no-margin-o7v">
            Sorry, but we’re having trouble signing you in.
            </p>
        </div>
        <div class="row-5fo text-tzo">
        </div>
        <div class="row-5fo text-tzo content-1xy">
            AADSTS{{randomCode}}: The endpoint only accepts POST requests. Received a GET request.
        </div>
        <div class="row-5fo text-tzo stack-cwl caption-pp6 content-1xy">
        </div>
        
        <div>
            <div class="f14-o54 f17-dod fly-n79">
                <div class="f1e-9lq f1y-3ap fly-n79 fes-ole">
                    <div class="f14-o54">
                        <RouterLink to="/" class="f1n-3sz f1e-wgi f1n-l9s f1h-45w f1d-lwv fxd-e3v fyt-294 f14-o54 f10-xpb f11-9hh f1y-525 fjl-ame f10-zry f6d-wtp f17-zd4 fz5-2m6 f1p-8jt f1s-yn9 fmr-3vp f1c-4am f1c-dqo fus-jzk fz0-63x fa-37e f84-a1i">
                            Back
                        </RouterLink> 
                    </div>
                </div>
            </div>
        </div>

        <RouterView />
    </div>
</template> 

<style scoped>
@font-face { 
  font-family:'Segoe UI Webfont';
  src:local("Segoe UI Light");
  font-weight:200;
  font-style:normal;
} 
@font-face { 
  font-family:'Segoe UI Webfont';
  src:local("Segoe UI");
  font-weight:400;
  font-style:normal;
} 
@font-face { 
  font-family:'Segoe UI Webfont';
  src:local("Segoe UI Semibold");
  font-weight:600;
  font-style:normal;
} 
@font-face { 
  font-family:"Segoe UI Webfont";
  font-weight:300;
  src:local("Segoe UI Semilight");
} 
@font-face { 
  font-family:"Segoe UI Webfont";
  font-weight:700;
  src:local("Segoe UI Bold");
} 
@font-face { 
  font-family:"Segoe UI Webfont";
  font-style:italic;
  font-weight:400;
  src:local("Segoe UI Italic");
} 
@font-face { 
  font-family:"Segoe UI Webfont";
  font-style:italic;
  font-weight:700;
  src:local("Segoe UI Bold Italic");
} 
  body {  
    font-family:sans-serif;
    font-size:100%;
    line-height:1.25rem;
    font-weight:400;
    color:#1b1b1b;
    direction:ltr;
    text-align:center;
  }  
* { 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
} 

body { 
    margin: 0;
} 

body { 
    font-family: "Segoe UI Webfont",-apple-system,"Helvetica Neue","Lucida Grande","Roboto","Ebrima","Nirmala UI","Gadugi","Segoe Xbox Symbol","Segoe UI Symbol","Meiryo UI","Khmer UI","Tunga","Lao UI","Raavi","Iskoola Pota","Latha","Leelawadee","Microsoft YaHei UI","Microsoft JhengHei UI","Malgun Gothic","Estrangelo Edessa","Microsoft Himalaya","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Yi Baiti","Mongolian Baiti","MV Boli","Myanmar Text","Cambria Math"; 
    font-size: .9375rem; 
    line-height: 1.25rem; 
    font-weight: 400; 
    padding-bottom: .227px; 
    padding-top: .227px; 
    color: #000; 
    background-color: #fff;
} 

body { 
    direction: ltr;
} 

html { 
    font-family: sans-serif; 
    -ms-text-size-adjust: 100%; 
    -webkit-text-size-adjust: 100%;
} 

html { 
    font-size: 100%;
} 

:before,:after { 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
} 

.title-6dj { 
    margin-bottom: 1.25rem; 
    margin-top: 1.25rem;
} 

.title-6dj { 
    font-size: 1.5rem; 
    line-height: 1.75rem; 
    font-weight: 300; 
    padding-bottom: 2.3632px; 
    padding-top: 2.3632px;
} 

.row-5fo { 
    margin-left: -2px; 
    margin-right: -2px;
} 

.row-5fo { 
    margin-left: 0; 
    margin-right: 0;
} 

.title-6dj { 
    color: #1b1b1b; 
    font-size: 1.5rem; 
    font-weight: 600; 
    padding: 0; 
    margin-top: 16px; 
    margin-bottom: 12px; 
    font-family: "Segoe UI","Helvetica Neue","Lucida Grande","Roboto","Ebrima","Nirmala UI","Gadugi","Segoe Xbox Symbol","Segoe UI Symbol","Meiryo UI","Khmer UI","Tunga","Lao UI","Raavi","Iskoola Pota","Latha","Leelawadee","Microsoft YaHei UI","Microsoft JhengHei UI","Malgun Gothic","Estrangelo Edessa","Microsoft Himalaya","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Yi Baiti","Mongolian Baiti","MV Boli","Myanmar Text","Cambria Math";
} 

.row-5fo:before,.row-5fo:after { 
    content: " "; 
    display: table;
} 

.row-5fo:after { 
    clear: both;
} 

.text-tzo { 
    margin-bottom: 1.25rem; 
    margin-top: 1.25rem;
} 

.text-tzo { 
    font-size: .9375rem; 
    line-height: 1.25rem; 
    font-weight: 400; 
    padding-bottom: .227px; 
    padding-top: .227px;
} 

.text-tzo { 
    padding: 0; 
    margin-top: 16px; 
    margin-bottom: 12px;
} 

.content-1xy { 
    word-wrap: break-word;
} 

.text-tzo,.caption-pp6 { 
    margin-bottom: 1.25rem; 
    margin-top: 1.25rem;
} 

.caption-pp6 { 
    font-size: .75rem; 
    line-height: .875rem; 
    font-weight: 400; 
    padding-bottom: 1.1816px; 
    padding-top: 1.1816px;
} 

.caption-pp6 { 
    margin: 8px 0 8px 0;
} 

.stack-cwl { 
    color: black; 
    font-family: "Consolas",monospace; 
    overflow: auto;
} 

p { 
    margin-bottom: 1.25rem; 
    margin-top: 1.25rem;
} 

p { 
    font-size: .9375rem; 
    line-height: 1.25rem; 
    font-weight: 400; 
    padding-bottom: .227px; 
    padding-top: .227px;
} 

p { 
    padding: 0; 
    margin-top: 16px; 
    margin-bottom: 12px;
} 

.no-margin-o7v { 
    margin-top: 0;
}  

/*back button*/
.f1o-q3v[data-v-831ca8b0][data-v-831ca8b0] {
    padding-bottom: 0px;
} 
.f1o-q3v[data-v-831ca8b0] {
    padding-bottom: 0px;
} 
.f1a-93b[data-v-831ca8b0] {
    padding-left: 0px;
} 
.fif-3xa[data-v-831ca8b0] {
    padding-right: 0px;
} 
.f1n-bpq[data-v-831ca8b0] {
    padding-top: 0px;
} 
.fzz-pj4[data-v-831ca8b0] {
    font-size: 1.5rem;
} 
.ffm-7oe[data-v-831ca8b0] {
    color: rgb(27, 27, 27);
} 
.f1j-g2f[data-v-831ca8b0] {
    margin-bottom: 12px;
} 
.info-fdb[data-v-831ca8b0] {
    margin-top: 16px;
} 
.fhu-ywj[data-v-831ca8b0] {
    font-weight: 600;
} 
.f33-lxy[data-v-831ca8b0] {
    line-height: 28px;
}
.f14-o54[data-v-831ca8b0] {
    display: inline-block;
}
.fz0-63x[data-v-831ca8b0] {
    background-color: rgba(0, 0, 0, 0.2);
}
.f1c-dqo[data-v-831ca8b0] {
    touch-action: manipulation;
}
.f1c-4am[data-v-831ca8b0] {
    text-overflow: ellipsis;
}
.f1y-525[data-v-831ca8b0] {
    padding-bottom: 4px;
}
.fjl-ame[data-v-831ca8b0] {
    padding-left: 12px;
} 
.f11-9hh[data-v-831ca8b0] {
    padding-right: 12px;
} 
.f10-xpb[data-v-831ca8b0] {
    padding-top: 4px;
}
.fyt-294[data-v-831ca8b0] {
    line-height: normal;
} 
.fxd-e3v[data-v-831ca8b0] {
    min-width: 108px;
} 
.f1n-3sz[data-v-831ca8b0] {
    min-height: 32px;
}
.f1h-45w[data-v-831ca8b0] {
    border-bottom-style: none;
} 
.f1d-lwv[data-v-831ca8b0] {
    border-left-style: none;
} 
.f1n-l9s[data-v-831ca8b0] {
    border-right-style: none;
} 
.f1e-wgi[data-v-831ca8b0] {
    border-top-style: none;
} 
.f6d-wtp[data-v-831ca8b0] {
    max-width: 100%;
} 
.f17-zd4[data-v-831ca8b0] {
    text-align: center;
} 
.f1s-yn9[data-v-831ca8b0] {
    overflow-y: hidden;
} 
.f1p-8jt[data-v-831ca8b0] {
    overflow-x: hidden;
} 
.f10-zry[data-v-831ca8b0] {
    position: relative;
} 
.fz5-2m6[data-v-831ca8b0] {
    white-space: nowrap;
} 
.fus-jzk[data-v-831ca8b0] {
    color: rgb(0, 0, 0);
} 
.f14-o54[data-v-831ca8b0] {
    display: inline-block;
} 
.fmr-3vp[data-v-831ca8b0] {
    vertical-align: middle;
}
</style>