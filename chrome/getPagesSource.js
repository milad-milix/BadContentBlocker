// @return: finds word in the page
function FindWordsInPage(document_root) {
	var word = "lkakljsd....",
    queue = [document_root.body],
    curr,notFound = 'not found';
	var forbiddenKeywordsArray = [" abused"," anal "," creampie "," orgasm "," porn "," blowjob "," cuckold "," cumshots "," gangbang "," handjob ",
	" lesbian "," milf "," orgasm "," orgy "," sex "," swingers "," threesome "," ass "," deepthroat "," tits "," pussy "," fingering "," fisting ",
	" fuck "," fucking "," hardcore "," hentai "," lesbians "," milf ",
	" squirt "," porno "," cock "," bbw "," pissing "," bdsm "," boobs "," booty "," butt "," clit "," nipples "," bisexual "," cunt "," dick ",
	" gangbang "," blackmail "," booty "," busty ",	" vagina "," nudes "," cfnm "," cougar "," cuckold "," cum "," dildo "," doggy "," doggystyle ",
	" downblouse "," drunk "," ebony "," erotic "," bdsm "," gagging "," facefuck ", " facesitting "," ejaculation "," masturbation "," femdom "," ffm ",
	" foursome "," freeballing "," fuckfest "," futanari "," gagging "," gangbanged "," gay "," gdp "];
	var arrayLength = forbiddenKeywordsArray.length;
	for (var j = 0; j < arrayLength; j++) {
		if (document_root.body.innerHTML.toString().indexOf(forbiddenKeywordsArray[j]) > -1) {
			return "found";
		}
	}
	return notFound;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: FindWordsInPage(document)
});