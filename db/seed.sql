-- sample data for users

INSERT INTO users(name, email, password) VALUES('tester','tester@testemail.com','password');

INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(2, 1, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(2, 2, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(2, 6, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(2, 7, 250);

INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(2, 1, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(2, 2, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(2, 6, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(2, 7, 250);


-- create alcohols for liquor list

-- INSERT INTO liquor(name) VALUES('Vodka'), ('Tequila'), ('Bourbon'), ('White Rum'),('Dark Rum'), ('Scotch Whiskey'), ('Gin'),('Whiskey'), ('Vermouth'), ('Absinthe'), ('Brandy');

INSERT INTO liquor(name,image) VALUES('Vodka','./images/alcohol-images/Vodka.png'), ('Tequila','./images/alcohol-images/Tequila.png'), ('Bourbon','./images/alcohol-images/Bourbon.png'), ('White Rum','./images/alcohol-images/WhiteRum.png'), ('Dark Rum', './images/alcohol-images/DarkRum.png'), ('Scotch Whiskey', './images/alcohol-images/ScotchWhiskey.png'), ('Gin','./images/alcohol-images/Gin.png'),('Whiskey','./images/alcohol-images/Whiskey.png'), ('Vermouth','./images/alcohol-images/Vermouth.png'), ('Absinthe','./images/alcohol-images/Absinthe.png'),('Brandy','./images/alcohol-images/Brandy.png');

-- Mojito </br>
INSERT INTO cocktail(name,description,procedure) 
VALUES('Mojito', 
E'60ml White Rum </br>
 Juice of 1 Lime </br> 1 Tsp granulated sugar </br> Mint Leaves </br> Soda water ',
E'STEP 1 </br>
Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go. Pour into a tall glass and add a handful of ice. </br> </br>

STEP 2 </br>
Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve.');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(1, 4, 60);
 
-- Tom Collins
INSERT INTO cocktail(name,description,procedure) 
VALUES('Tom Collins', 
E'50ml Gin </br>
 25ml lemon juice </br> 25ml sugar syrup </br>  125ml chilled soda water',
E'STEP 1 </br>
Build the drink over plenty of ice in a Collins glass, stir gently and garnish with a slice of lemon.');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 7, 50);

-- Sex on the beach
INSERT INTO cocktail(name,description,procedure) 
VALUES('Sex on the Beach', 
E'50ml Vodka </br>
 2 oranges juiced </br> 50ml cranberry juice </br>  25ml peach schnapps </br> ice' ,
E'STEP 1 </br>
Fill two tall glasses with ice cubes. Pour the vodka, peach schnapps and fruit juices into a large jug and stir. 
</br> </br>

STEP 2 </br>
Divide the mixture between the two glasses and stir gently to combine. Additionally garnish with the cocktail cherries and orange slices.');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(3, 1, 50);

-- Piña colada
INSERT INTO cocktail(name,description,procedure) 
VALUES('Pina colada', 
E'60ml White Rum </br>
 60ml coconut cream </br> 120 ml pineapple juice </br> ice' ,
E'STEP 1 </br>
Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and garnish as you like. 
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(4, 4, 60);

-- Special Lemon Lime Bitters
INSERT INTO cocktail(name,description,procedure) 
VALUES('Special Lemon Lime Bitters', 
E'60ml Gin </br>
 60ml Lime Juice </br> 120 ml Tonic Water </br> A dash of angostura bitters' ,
E'STEP 1 </br>
Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and garnish as you like. 
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(5, 7, 60);

-- Ge Special
INSERT INTO cocktail(name,description,procedure) 
VALUES('Ge Special', 
E'60ml Vodka </br> 60ml Tequila </br> 120 ml Gin </br> 150ml Redbull </br> ice' ,
E'STEP 1 </br>
Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and pray.
</br> </br>

STEP 2 </br>
Pour RedBull over the top, and add ice. Enjoy and garnish as desired.
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(6, 7, 120);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(6, 1, 60);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(6, 2, 60);

-- Zombie Cocktail
INSERT INTO cocktail(name,description,procedure) 
VALUES('Zombie Cocktail', 
E'25ml Dark Rum </br> 
25ml White Rum </br> 50ml Lime Juice </br> 150ml Pineapple Juice </br> ice' ,
E'STEP 1</br>
Pour the rums and fruit juices into a cocktail shaker filled with ice and shake hard until the outside of the shaker feels really cold.
</br> </br>
STEP 2 </br>
Strain the mixture into a tall glass or hurricane glass filled with ice, then slowly pour in the grenadine to colour the drink.
</br> </br>

STEP 3 </br>
Skewer the orange wedge and cherries on a cocktail stick. Garnish the drink with mint sprigs and the skewered fruit.
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(7, 4, 25);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(7, 5, 25);

-- Long Island Iced Tea
INSERT INTO cocktail(name,description,procedure) 
VALUES('Long Island Iced Tea', 
E'50ml Vodka </br> 
50ml Gin </br> 50ml Tequila </br> 50ml White Rum </br> 50ml Whiskey </br> Ice </br> 50ml Lime Juice\ 500ml cola' ,
E'STEP 1</br>
Pour the vodka, gin, tequila, rum and Whiskey into a large (1.5l) jug, and add lime juice to taste. Half fill the jug with ice, then stir until the outside feels cold.
</br> </br>

STEP 2</br>
Add the cola then stir to combine. Drop in the lime wedges.

</br> </br>
STEP 3 </br>
Fill 4 tall glasses with more ice cubes and pour in the iced tea.
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(8, 1, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(8, 2, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(8, 4, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(8, 7, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(8, 8, 50);

-- Corpse Reviver No 3
INSERT INTO cocktail(name,description,procedure) 
VALUES('Corpse Reviver No 3', 
E'30ml Gin </br> 
30ml Lemon Juice </br> 30ml Cointreau </br> 30ml Vermouth </br> 5ml Absinthe ' ,
E'STEP 1 </br>
Add the gin, lemon juice, Cointreau, dry vermouth, and absinthe to a cocktail shaker. Fill it with ice and shake it until cold.
</br> </br>
STEP 2 </br>
Strain into a cocktail glass. If desired, garnish with an orange peel or orange wedge. 
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(9, 7, 30);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(9, 9, 30);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(9, 10, 5);



