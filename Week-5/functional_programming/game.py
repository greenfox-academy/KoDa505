class Character():
    def __init__(self, health = 20, armor = 10):
        self._health = health
        self._armor = armor
        self._isAlive = True

    def sufferDamage(self, damage):
        sufferedDamage = self._health + self._armor - damage
        if sufferedDamage < 1:
            self._isAlive = False

    def heal(self, heal):
        self._health += heal

    def getHealth(self):
        return self._health

    def isAlive(self):
        return self._isAlive

#def handleEvents(events):
#    listofdamages = list(filter(lambda event: event['type'] == 'damage', events))
#    list(map(lambda event: event['character'].sufferDamage(event['size']), listofdamages))
#    healed = list(filter(lambda event: event['type'] == 'heal', events))
#    list(map(lambda event: event['character'].heal(event['size']),healed))
"""
def handleEvents(events):
    eventHandlers = {
        'damage': applyDamage,
        'heal': applyHeal
    }
    list(map(lambda event: eventHandlers[event['type']](event), events))
"""
def handleEvents(events):   #az elozo egy kicsit szetszedve
    list(map(handleEvent, events))

def handleEvent(event):
    eventHandlers[event['type']](event)

def applyHeal(event):
    event['character'].heal(event['size'])

def applyDamage(event):
    event['character'].sufferDamage(event['size'])

eventHandlers = {
    'damage': applyDamage,
    'heal': applyHeal
}
