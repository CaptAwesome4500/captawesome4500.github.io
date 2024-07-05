//Create Array
let board_data = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

//Define game vars
let player = 1;
let game_over = false;

//sounds
const yay = new Audio("../audio/TicTacToe.sounds/victory trill.wav");
const tie = new Audio("../audio/TicTacToe.sounds/tie trill.wav");
const place = new Audio("../audio/TicTacToe.sounds/place.wav")

//Get Cells
const cell_elements = document.querySelectorAll(".cell");
console.log(cell_elements);

//add listener
cell_elements.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        
        if(game_over == false){
            
            place_marker(index);
        
        }

    });
});

function place_marker(index)
{
    //determine position
    let col = index % 3
    let row = (index - col) / 3

    //check player
    if(board_data[row][col] == 0){
        board_data[row][col] = player;
        
        //change player
        player *= -1;

        //update screen
        draw_markers();

        //check if win
        check_win();
    }
}

function draw_markers()
{
    place.play()

    //iterate rows
    for(let row = 0; row < 3; row++){
        
        //iterate columns
        for(let col = 0; col < 3; col++){
            
            if(board_data[row][col] == 1){
                
                //update class
                cell_elements[(row * 3) + col].classList.add("cross")
            }
            else if(board_data[row][col] == -1){
                
                //update class
                cell_elements[(row * 3) + col].classList.add("circle")
            }
        }
    }
}

function check_win ()
{
    //tie
     if(board_data[0].indexOf(0) == -1 && 
        board_data[1].indexOf(0) == -1 &&
        board_data[2].indexOf(0) == -1) {

        console.log("Tie")
        no_one_wins()
      }

    //rows & columns
    for(let i = 0; i < 3; i++){

        let row_sum = board_data[i][0] + board_data[i][1] + board_data[i][2];

        let col_sum = board_data[0][i] + board_data[1][i] + board_data[2][i];

        if(row_sum == 3 || col_sum == 3){
            //Player 1 win
            console.log("Player 1 Wins")
            player_1_wins()
        }
        
        else if(row_sum == -3 || col_sum == -3){
            //Player 1 win
            console.log("Player 2 Wins")
            player_2_wins()
        }
    }

    //diagionals
    let diagional_sum_1 = board_data[0][0] + board_data[1][1] + board_data[2][2];
    let diagional_sum_2 = board_data[0][2] + board_data[1][1] + board_data[2][0];

    if(diagional_sum_1 == 3 || diagional_sum_2 == 3){
        //Player 1 win
        console.log("Player 1 Wins")
        player_1_wins()
     }
        
    else if(diagional_sum_1 == -3 || diagional_sum_2 == -3){
        //Player 1 win
        console.log("Player 2 Wins")
        player_2_wins()
     }
}

function player_1_wins()
{
    game_over = true;
    document.getElementById("winner").textContent="Player 1 Wins!";
    yay.play();
}

function player_2_wins()
{
    game_over = true;
    document.getElementById("winner").textContent="Player 2 Wins!";
    yay.play();
}

function no_one_wins()
{
    game_over = true;
    document.getElementById("winner").textContent="It's a Draw!";
    tie.play();
}
