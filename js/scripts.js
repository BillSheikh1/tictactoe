$(document).ready(function() {

	
	/**
	 * @param  {[name]}
	 * @return {[name]}
	 *
	 * Creates a player object.
	 */
	function player(name) {
		this.name = name;

		this.getName = function() {
			return name;
		}
	}

	//Player One
	var playerOne = new player(1);
	//Player Two
	var playerTwo = new player(2);

	//Game boolean
	var game = false;
	//Turn boolean
	var turn = true;

	/**
	 * @param  {#start}
	 * Adds click event to start button. Each table element is clickable.
	 */
	$('#start').click(function() {
		game = true;
		$('#info').html("<b>Game in Progress</b>");
	});

	$('#tl').on("click", function() {

		if(game){
			if($('#tl').is(':empty')) {
			if(turn) {
				$('#tl').text('X');
				turn = false;
			}
			else {
				$('#tl').text('O');
				turn = true;
			}
		}
		}
		endGame();
	});

	$('#tm').on("click", function() {

		if(game) {
			if($('#tm').is(':empty')) {
			if(turn) {
				$('#tm').text('X');
				turn = false;
			}
			else {
				$('#tm').text('O');
				turn = true;
			}
		}
		}
		
		endGame();
	});

	$('#tr').on("click", function() {

		if(game) {
			if($('#tr').is(':empty')) {
			if(turn) {
				$('#tr').text('X');
				turn = false;
			}
			else {
				$('#tr').text('O');
				turn = true;
			}
		}
		}
		
		endGame();
	});

	$('#ml').on("click", function() {

		if(game) {
			if($('#ml').is(':empty')) {
			if(turn) {
				$('#ml').text('X');
				turn = false;
			}
			else {
				$('#ml').text('O');
				turn = true;
			}
		}
		}
		
		endGame();
	});

	$('#mm').on("click", function() {

		if(game) {
			if($('#mm').is(':empty')) {
			if(turn) {
				$('#mm').text('X');
				turn = false;
			}
			else {
				$('#mm').text('O');
				turn = true;
			}
		}
		}
		
		endGame();
	});

	$('#mr').on("click", function() {

		if(game) {
			if($('#mr').is(':empty')) {
			if(turn) {
				$('#mr').text('X');
				turn = false;
			}
			else {
				$('#mr').text('O');
				turn = true;
			}
		}
		}
		
		endGame();
	});

	$('#bl').on("click", function() {

		if(game) {
			if($('#bl').is(':empty')) {
			if(turn) {
				$('#bl').text('X');
				turn = false;
			}
			else {
				$('#bl').text('O');
				turn = true;
			}
		}
		}
		

		endGame();
	});

	$('#bm').on("click", function() {

		if(game) {
			if($('#bm').is(':empty')) {
			if(turn) {
				$('#bm').text('X');
				turn = false;
			}
			else {
				$('#bm').text('O');
				turn = true;
			}
		}
		}
		
		endGame();
	});

	$('#br').on("click", function() {

		if(game) {
			if($('#br').is(':empty')) {
			if(turn) {
				$('#br').text('X');
				turn = false;
			}
			else {
				$('#br').text('O');
				turn = true;
			}
		}
		}
		
		endGame();
	});

	/**
	 * EndGame function. Checks when to end the game and who wins.
	 */
	function endGame() {
		if($('#tl').text() == 'X' && $('#tm').text() == 'X' && $('#tr').text() == 'X') {
		game = false;
		$('#info').html("<b>Player One Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#tl').text() == 'O' && $('#tm').text() == 'O' && $('#tr').text() == 'O') {
		game = false;
		$('#info').html("<b>Player Two Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#tl').text() == 'X' && $('#mm').text() == 'X' && $('#br').text() == 'X') {
		game = false;
		$('#info').html("<b>Player One Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#tl').text() == 'O' && $('#mm').text() == 'O' && $('#br').text() == 'O') {
		game = false;
		$('#info').html("<b>Player Two Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#ml').text() == 'X' && $('#mm').text() == 'X' && $('#mr').text() == 'X') {
		game = false;
		$('#info').html("<b>Player One Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#ml').text() == 'O' && $('#mm').text() == 'O' && $('#mr').text() == 'O') {
		game = false;
		$('#info').html("<b>Player Two Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#bl').text() == 'X' && $('#bm').text() == 'X' && $('#br').text() == 'X') {
		game = false;
		$('#info').html("<b>Player One Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#bl').text() == 'O' && $('#bm').text() == 'O' && $('#br').text() == 'O') {
		game = false;
		$('#info').html("<b>Player Two Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#bl').text() == 'X' && $('#mm').text() == 'X' && $('#tr').text() == 'X') {
		game = false;
		$('#info').html("<b>Player One Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#bl').text() == 'O' && $('#mm').text() == 'O' && $('#tr').text() == 'O') {
		game = false;
		$('#info').html("<b>Player Two Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#tl').text() == 'X' && $('#ml').text() == 'X' && $('#bl').text() == 'X') {
		game = false;
		$('#info').html("<b>Player One Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#tl').text() == 'O' && $('#ml').text() == 'O' && $('#bl').text() == 'O') {
		game = false;
		$('#info').html("<b>Player Two Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#tr').text() == 'X' && $('#mr').text() == 'X' && $('#br').text() == 'X') {
		game = false;
		$('#info').html("<b>Player One Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else if($('#tr').text() == 'O' && $('#mr').text() == 'O' && $('#br').text() == 'O') {
		game = false;
		$('#info').html("<b>Player Two Wins!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
	}
	else {

		function isNotEmpty(td) {
			if(td == '' || td == ' ') {
				return false;
			}
			else {
				return true;
			}
		}

		if((isNotEmpty($('#tl').text()) && isNotEmpty($('#tm').text()) && isNotEmpty($('#tr').text()) && isNotEmpty($('#ml').text()) && isNotEmpty($('#mm').text()) && isNotEmpty($('#mr').text()) && isNotEmpty($('#bl').text()) && isNotEmpty($('#bm').text()) && isNotEmpty($('#br').text()))) {
			game = false;
			$('#info').html("<b>Draw!</b><br><button id='reload' onclick='location.reload();'>Reload</button>");
		}
	}
	}

	

});
