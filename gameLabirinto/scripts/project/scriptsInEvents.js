

const scriptsInEvents = {

	async EGame_Event1_Act1(runtime, localVars)
	{
		//runtime.objects.Audio.playMusic("Trilha Sonora.webm", { loop: true });
	},

	async EGame_Event22_Act3(runtime, localVars)
	{
		//obter o valor da variavel global vidas
		let Life = runtime.globalVars.Life;
		Life --;
		//variavel global no construct 3 
		runtime.globalVars.Life = Life;
		//se vidas == 0 execute a açao de ir para tela de game over
		//if(Life <= 0){
		//console.log("gameover")
		//runtime.goToLayout("GameOver")};
	},

	async EGame_Event24(runtime, localVars)
	{
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
