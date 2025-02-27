function generateStory() 
{
	let lives = Math.ceil(Math.random() * 20);
	let energy = Math.ceil(Math.random() * 20);
	let coins = Math.ceil(Math.random() * 20);
	
	let highestStat = Math.max(lives, energy, coins);
	let strongestAttribute = [];
	if (highestStat === lives) strongestAttribute.push("Lives");if (highestStat === energy) strongestAttribute.push("Energy");
	if (highestStat === coins) strongestAttribute.push("Coins");
	
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let ability = lives <= 26 ? alphabet[lives - 1] : "(Unknown Skill)";
	let totalMinutes = energy * coins;
	let hours = Math.floor(totalMinutes / 60);
	let minutes = totalMinutes % 60;
	
	let story = `<p>Game Stats - Lives: ${lives}, Energy: ${energy}, Coins: ${coins}</p>`;
	story += `<p>Your strongest attribute is: ${strongestAttribute.join(", ")} (${highestStat})</p>`;
	story += `<p>You unlocked the ability: ${ability}</p>`;
	story += `<p>Playtime: ${totalMinutes} minutes (${hours} hours and ${minutes} minutes).</p>`;
	document.getElementById("story").innerHTML = story;
	}