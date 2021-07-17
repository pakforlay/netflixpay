const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
const fs = require('fs');
var chalk = require('chalk');
const delay = require('delay');
const randomUseragent = require('random-useragent');
console.log('\n'+chalk.green('[+] NetflixPay by GygDoggy' + '\n'))
var email = readlineSync.question('[+] Email Regist : ');
var kataSandi = readlineSync.question('[+] Kata Sandi Regist : ');
var cc  = readlineSync.question('[+] Credit Card : ');
var bulanTahun = readlineSync.question('[+] Tahun : ');
var ccv = readlineSync.question('[+] CCV : ');
var random_name = require('node-random-name');
        var name1 = random_name({
            first: true
        });
        var name2 = random_name({
            last: true
        });
        const $options = {
            waitUntil: 'networkidle2'
        };
		
(async () => {
	var browser = await puppeteer.launch({
		headless: false,
	});
	const page = await browser.newPage();
	await page.goto('https://www.netflix.com/', $options);
	
	/* coba masukin email | var email di line 8 */
	const daftarEmail = await page.type('#id_email_hero_fuji', email);
	console.log('\n'+chalk.green('[+] input email', email))
	
	/* Klik Next daftar */
	const klikDaftar =  await page.$('#appMountPoint > div > div > div > div > div > div.our-story-cards > div.our-story-card.hero-card.hero_fuji.vlv > div.our-story-card-text > form > div > div > button > span.cta-btn-txt');
	await klikDaftar.click()
	await klikDaftar.dispose()
	await delay(1500)

	/* klik next daftar lagi */
	await page.waitForSelector('#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button');
	const nextDaftar = await page.$('#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button', { delay: 1000 });
	await nextDaftar.click()
	await nextDaftar.dispose()
	await delay(1500)
	
	
	/* input sandi var sandi di line 9 */
	await page.waitForSelector('#id_password');
	const ketikPassword = await page.$('#id_password');
	await ketikPassword.type(kataSandi)
	await ketikPassword.dispose()
	await delay(1500)
	console.log('\n'+chalk.green('[+] Memasukkan Password', kataSandi))
	
	/* next sandi */
	await page.waitForSelector('#appMountPoint > div > div > div.simpleContainer > div > form > div.submitBtnContainer > button')
	const klikPassword = await page.$('#appMountPoint > div > div > div.simpleContainer > div > form > div.submitBtnContainer > button');
	await klikPassword.click()
	await klikPassword.dispose()
	await delay(1500)
	console.log('\n'+chalk.green('[+] Sukses Daftar', email,'|', kataSandi))
	
	/* next pilih plan */
	await page.waitForSelector('#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button')
	const nextPlan = await page.$('#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button', { delay: 1000 });
	await nextPlan.click()
	await nextPlan.dispose()
	await delay(1500)
	
	/* klik pilih plan */
	await page.waitForSelector('#appMountPoint > div > div > div.simpleContainer > div > div.planFormContainer > div.planGrid.planGrid--has4Plans > div > div > label:nth-child(2) > span')
	const selectPlan = await page.$('#appMountPoint > div > div > div.simpleContainer > div > div.planFormContainer > div.planGrid.planGrid--has4Plans > div > div > label:nth-child(2) > span');
	await selectPlan.click()
	await selectPlan.dispose()
	await delay(1500)
	console.log('\n'+chalk.green('[+] Memilih Plan Mobile'))
	
	/* next pilih pembayaran */
	await page.waitForSelector('#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button')
	const klikPlan = await page.$('#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button');
	await klikPlan.click()
	await klikPlan.dispose()
	await delay(1500)
	
	/* Pilih pembayaran dgn credit card */
	const klikPembayaran = await page.$('#creditOrDebitCardDisplayStringId');
	await klikPembayaran.click()
	await klikPembayaran.dispose()
	await delay(1000)
	console.log('\n'+chalk.green('[+] Mencoba pembayaran dan mengisi data', email, '|' , kataSandi, '|', name1, '|', name2, '|', cc, '|', bulanTahun, '|', ccv))

	/* input nama depan */
	const namaDepan = await page.$('#id_firstName', name1);
	await namaDepan.type(name1)
	await namaDepan.dispose()
	await delay(1500)
	
	/* input nama belakang */
	const namaBelakang = await page.$('#id_lastName', name2);
	await namaBelakang.type(name2)
	await namaBelakang.dispose()
	await delay(1500)
	
	/* input cc */
	const kartuKredit = await page.$('#id_creditCardNumber', cc);
	await kartuKredit.type(cc)
	await kartuKredit.dispose()
	await delay(1500)
	
	/* input exp cc */
	const tahunBulan = await page.$('#id_creditExpirationMonth', bulanTahun);
	await tahunBulan.type(bulanTahun)
	await tahunBulan.dispose()
	await delay(1500)
	
	/* input cvv */
	const kode = await page.$('#id_creditCardSecurityCode', ccv);
	await kode.type(ccv)
	await kode.dispose()
	await delay(1500)
	
	/* klik agree */
	console.log('\n'+chalk.green('[+] Klik Agree'))
	
	/* Setuju pembayaran */
	const klikStart = await page.$('#appMountPoint > div > div > div.simpleContainer > div > form > div.submitBtnContainer > button');
	await klikPembayaran.click()
	await klikPembayaran.dispose()
	await delay(2000)

	})();