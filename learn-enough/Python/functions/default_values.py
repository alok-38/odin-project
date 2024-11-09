def get_greeting(email, name="there"):
    print("Hello", name, "welcome! you've registered your email:", email)

get_greeting("lane@example.com", "Lane")
get_greeting("lane@example.com")

def get_punched(health, armor=0):
    damage = 50 - armor
    new_health = health - damage
    return new_health

def get_slashed(health, armor):
    damage = 100 - armor
    new_health = health - damage
    return new_health

def test(health, armor):
    print(f"Health: {health}, Armor: {armor}")

test(400, 5)

