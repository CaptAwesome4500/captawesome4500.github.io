#modules
import random
import time

#Variables
one = "   "
two = "   "
three = "   "
four = "   "
five = "   "
six = "   "
seven = "   "
eight = "   "
nine = "   "
pipe = "|"
middle = "----------\n"
xylophone = " X "
omega = " O "
null = "   "
winner_xylophone = xylophone + xylophone + xylophone
winner_omega = omega + omega + omega
big_gap = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
player_cell = 0
random_cpu = 0
won = 0
num_one = " 1 "
num_two = " 2 "
num_three = " 3 "
num_four = " 4 "
num_five = " 5 "
num_six = " 6 "
num_seven = " 7 "
num_eight = " 8 "
num_nine = " 9 "

#List
cells = [1, 2, 3, 4, 5, 6, 7, 8, 9]

#Solutions Variables
solution_YXX = "    X  X "
solution_XYX = " X     X "
solution_XXY = " X  X    "
win_YOO = "    O  O "
win_OYO = " O     O "
win_OOY = " O  O    "

def build_grid():
    #Global Variables
    global one
    global two
    global three
    global four
    global five
    global six
    global seven
    global eight
    global nine
    
    row_one = one + pipe + two + pipe + three + "\n"
    row_two = four + pipe + five + pipe + six + "\n"
    row_three = seven + pipe + eight + pipe + nine + "\n"
    board = row_one + middle + row_two + middle + row_three
    print(board)

def cheat():
    global one
    global two
    global three
    global four
    global five
    global six
    global seven
    global eight
    global nine
    
    one = omega
    two = xylophone
    three = omega
    four = xylophone
    five = xylophone
    six = omega
    seven = xylophone
    eight = null
    nine = omega
    print(big_gap + big_gap)

def cpu_choose():
    #Global Variables
    global one
    global two
    global three
    global four
    global five
    global six
    global seven
    global eight
    global nine
    global random_cpu
    
    random_cpu = int(random.choice(cells))
    
    if random_cpu == 1:
        if one == null:
            one = omega
            return
       
    if random_cpu == 2:
        if two == null:
            two = omega
            return
        
    if random_cpu == 3:
        if three == null:
            three = omega
            return
          
    if random_cpu == 4:
        if four == null:
            four = omega
            return

    if random_cpu == 5:
        if five == null:
            five = omega
            return
         
    if random_cpu == 6:
        if six == null:
            six = omega
            return
       
    if random_cpu == 7:
        if seven == null:
            seven = omega
            return
    
    if random_cpu == 8:
        if eight == null:
            eight = omega
            return

    if random_cpu == 9:
        if nine == null:
            nine = omega
            return

    cpu_choose()

def compute_grid():
    #Global Variables
    global one
    global two
    global three
    global four
    global five
    global six
    global seven
    global eight
    global nine
    global solution_YXX
    global solution_XYX
    global solution_XXY
    global win_YOO
    global win_OYO
    global win_OOY
        
    #Assemble Possiable Solutions
    #Across
    row_one_across = one + two + three
    row_two_across = four + five + six
    row_three_across = seven + eight + nine
    
    #Down
    row_one_down = one + four + seven
    row_two_down = two + five + eight
    row_three_down = three + six + nine
    
    #Diagional
    row_one_diagional = one + five + nine
    row_three_diagional = three + five + seven
    
    #Win
    #Row One Across
    if row_one_across == win_YOO or row_one_across == win_OYO or row_one_across == win_OOY:

        if row_one_across == win_YOO:
            one = omega
        
        elif row_one_across == win_OYO:
            two = omega
                   
        elif row_one_across == win_OOY:
            three = omega
            
        return
    #Row Two Across
    if row_two_across == win_YOO or row_two_across == win_OYO or row_two_across == win_OOY:
    
    
        if row_two_across == win_YOO:
            four = omega
        
        elif row_two_across == win_OYO:
            five = omega
                   
        elif row_two_across == win_OOY:
            six = omega
            
        return
    #Row Three Across
    if row_three_across == win_YOO or row_three_across == win_OYO or row_three_across == win_OOY:
    
        if row_three_across == win_YOO:
            seven = omega
        
        elif row_three_across == win_OYO:
            eight = omega
                   
        elif row_three_across == win_OOY:
            nine = omega
    
        return
    #Row One Down
    if row_one_down == win_YOO or  row_one_down == win_OYO or  row_one_down == win_OOY:

        if row_one_down == win_YOO:
            one = omega
        
        elif row_one_down == win_OYO:
            four = omega
        
        elif row_one_down == win_OOY:
            seven = omega
        return
    #Row Two Down
    if row_two_down == win_YOO or  row_two_down == win_OYO or  row_two_down == win_OOY:

        if row_two_down == win_YOO:
            two = omega
        
        elif row_two_down == win_OYO:
            five = omega
        
        elif row_two_down == win_OOY:
            eight = omega
    
        return
    #Row Three Down
    if row_three_down == win_YOO or  row_three_down == win_OYO or  row_three_down == win_OOY:
    
        if row_three_down == win_YOO:
            three = omega
        
        elif row_three_down == win_OYO:
            six = omega
        
        elif row_three_down == win_OOY:
            nine = omega
    
        return
    #Row One Diagional
    if row_one_diagional == win_YOO or row_one_diagional == win_OYO or row_one_diagional == win_OOY:
        
        if row_one_diagional == win_YOO:
            one = omega
        
        elif row_one_diagional == win_OYO:
            five = omega
        
        elif row_one_diagional == win_OOY:
            nine = omega
    
        return
    #Row Three Diagional
    if row_three_diagional == win_YOO or row_three_diagional == win_OYO or row_three_diagional == win_OOY:

        if row_three_diagional == win_YOO:
            three = omega
        
        elif row_three_diagional == win_OYO:
            five = omega
        
        elif row_three_diagional == win_OOY:
            seven = omega
    
        return
    
    #Block
    #Row One Across
    if row_one_across == solution_YXX or row_one_across == solution_XYX or row_one_across == solution_XXY:

        if row_one_across == solution_YXX:
            one = omega
        
        elif row_one_across == solution_XYX:
            two = omega
                   
        elif row_one_across == solution_XXY:
            three = omega
            
        return
    #Row Two Across
    if row_two_across == solution_YXX or row_two_across == solution_XYX or row_two_across == solution_XXY:
    
    
        if row_two_across == solution_YXX:
            four = omega
        
        elif row_two_across == solution_XYX:
            five = omega
                   
        elif row_two_across == solution_XXY:
            six = omega
            
        return
    #Row Three Across
    if row_three_across == solution_YXX or row_three_across == solution_XYX or row_three_across == solution_XXY:
    
        if row_three_across == solution_YXX:
            seven = omega
        
        elif row_three_across == solution_XYX:
            eight = omega
                   
        elif row_three_across == solution_XXY:
            nine = omega
    
        return
    #Row One Down
    if row_one_down == solution_YXX or  row_one_down == solution_XYX or  row_one_down == solution_XXY:

        if row_one_down == solution_YXX:
            one = omega
        
        elif row_one_down == solution_XYX:
            four = omega
        
        elif row_one_down == solution_XXY:
            seven = omega
        return
    #Row Two Down
    if row_two_down == solution_YXX or  row_two_down == solution_XYX or  row_two_down == solution_XXY:

        if row_two_down == solution_YXX:
            two = omega
        
        elif row_two_down == solution_XYX:
            five = omega
        
        elif row_two_down == solution_XXY:
            eight = omega
    
        return
    #Row Three Down
    if row_three_down == solution_YXX or  row_three_down == solution_XYX or  row_three_down == solution_XXY:
    
        if row_three_down == solution_YXX:
            three = omega
        
        elif row_three_down == solution_XYX:
            six = omega
        
        elif row_three_down == solution_XXY:
            nine = omega
    
        return
    #Row One Diagional
    if row_one_diagional == solution_YXX or row_one_diagional == solution_XYX or row_one_diagional == solution_XXY:
        
        if row_one_diagional == solution_YXX:
            one = omega
        
        elif row_one_diagional == solution_XYX:
            five = omega
        
        elif row_one_diagional == solution_XXY:
            nine = omega
    
        return
    #Row Three Diagional
    if row_three_diagional == solution_YXX or row_three_diagional == solution_XYX or row_three_diagional == solution_XXY:

        if row_three_diagional == solution_YXX:
            three = omega
        
        elif row_three_diagional == solution_XYX:
            five = omega
        
        elif row_three_diagional == solution_XXY:
            seven = omega
    
        return
    
    cpu_choose()

def look_for_winner():
        #Global Variables
    global one
    global two
    global three
    global four
    global five
    global six
    global seven
    global eight
    global nine
    global winner_omega
    global winner_xylophone
    global won
    
    #Assemble Possiable Solutions
    #Across
    row_one_across = one + two + three
    row_two_across = four + five + six
    row_three_across = seven + eight + nine
    
    #Down
    row_one_down = one + four + seven
    row_two_down = two + five + eight
    row_three_down = three + six + nine
    
    #Diagional
    row_one_diagional = one + five + nine
    row_three_diagional = three + five + seven

    if row_one_across == winner_omega:
        print("Computer Wins")
        won = 1
        return
    if row_two_across == winner_omega:
        print("Computer Wins")
        won = 1
        return
    if row_three_across == winner_omega:
        print("Computer Wins")
        won = 1
        return
    if row_one_down == winner_omega:
        print("Computer Wins")
        won = 1
        return
    if row_two_down == winner_omega:
        print("Computer Wins")
        won = 1
        return
    if row_three_down == winner_omega:
        print("Computer Wins")
        won = 1
        return
    if row_one_diagional == winner_omega:
        print("Computer Wins")
        won = 1
        return
    if row_three_diagional == winner_omega:
        print("Computer Wins")
        won = 1
        return
        
    if row_one_across == winner_xylophone:
        print("You Win!")
        won = 1
        return
    if row_two_across == winner_xylophone:
        print("You Win!")
        won = 1
        return
    if row_three_across == winner_xylophone:
        print("You Win!")
        won = 1
        return
    if row_one_down == winner_xylophone:
        print("You Win!")
        won = 1
        return
    if row_two_down == winner_xylophone:
        print("You Win!")
        won = 1
        return
    if row_three_down == winner_xylophone:
        print("You Win!")
        won = 1
        return
    if row_one_diagional == winner_xylophone:
        print("You Win!")
        won = 1
        return
    if row_three_diagional == winner_xylophone:
        print("You Win!")
        won = 1
        return
    
    if one == omega or one == xylophone:
        if two == omega or two == xylophone:
            if three == omega or three == xylophone:
                if four == omega or four == xylophone:
                    if five == omega or five == xylophone:
                        if six == omega or six == xylophone:
                            if seven == omega or seven == xylophone:
                                if eight == omega or eight == xylophone:
                                    if nine == omega or nine == xylophone:
                                        print("Draw")
                                        won = 1
                                        return
    
    
def computer_turn():
    print(big_gap)
    print("Computer Turn")
    time.sleep(3)
    print("\n\n\n\n\n\n\n")
    compute_grid()

def game_loop():
    build_grid()
    if won == 0:
        player_turn()
    if won == 0:
        look_for_winner()
    if won == 0:    
        computer_turn()
    if won == 0:
        look_for_winner()
    if won == 0:
        game_loop()
    if won == 1:
        return

def invalid_intiger():
    print(big_gap)
    build_grid()
    print("That Is An Invalid Location.\nEnter A New Number and Try Again.\n\n")
    player_turn()

def place_X():
    #Global Variables
    global one
    global two
    global three
    global four
    global five
    global six
    global seven
    global eight
    global nine
    global player_cell
    
    if player_cell == 0:
        invalid_intiger()
    
    if player_cell == 1:
        if one == null:
            one = xylophone
            return
        
        else:
            invalid_intiger()
       
    if player_cell == 2:
        if two == null:
            two = xylophone
            return
        
        else:
            invalid_intiger()
        
    if player_cell == 3:
        if three == null:
            three = xylophone
            return
        
        else:
            invalid_intiger()
          
    if player_cell == 4:
        if four == null:
            four = xylophone
            return
        
        else:
            invalid_intiger()
           
    if player_cell == 5:
        if five == null:
            five = xylophone
            return
        
        else:
            invalid_intiger()
           
    if player_cell == 6:
        if six == null:
            six = xylophone
            return
        
        else:
            invalid_intiger()
                
    if player_cell == 7:
        if seven == null:
            seven = xylophone
            return
        
        else:
            invalid_intiger()
            
    if player_cell == 8:
        if eight == null:
            eight = xylophone
            return
        
        else:
            invalid_intiger()
    
    if player_cell == 9:
        if nine == null:
            nine = xylophone
            return
        
    else:
        invalid_intiger()
            
def player_turn():
    global player_cell
    print("It's Your Turn!")
    player_cell = int(input("Choose A Cell To Place Your X:   "))
    #if player_cell == 1 or player_cell == 2 or player_cell == 3 or player_cell == 4 or player_cell == 5 or player_cell == 6 or player_cell == 7 or player_cell == 8 or player_cell == 9:
        #int(player_cell)
    #else:
        #player_cell.lower()
        #if player_cell == "help":
            #build number grid
                #row_one = num_one + pipe + num_two + pipe + num_three + "\n"
                #row_two = num_four + pipe + num_five + pipe + num_six + "\n"
                #row_three = num_seven + pipe + num_eight + pipe + num_nine + "\n"
                #num_board = row_one + middle + row_two + middle + row_three
                #print(num_board)
        #else:
            #invalid_intiger()

    place_X()

game_loop()
#cheat()
#look_for_winner()
build_grid()