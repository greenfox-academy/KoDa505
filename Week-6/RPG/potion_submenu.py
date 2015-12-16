from basic_elements import *
import class_Player


Potion_SubMenu = Menu()


Menu1 = MenuItem(1, "Potion of Dexterity", class_Player.player1.potion_dexterity)
Menu2 = MenuItem(2, "Potion of Health", class_Player.player1.potion_health)
Menu3 = MenuItem(3, "Potion of Luck", class_Player.player1.potion_luck)


Potion_SubMenu.add(Menu1)
Potion_SubMenu.add(Menu2)
Potion_SubMenu.add(Menu3)
