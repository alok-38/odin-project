def cast_iceblast(wizard_level, start_mana):
    damage = wizard_level * 2
    new_mana = start_mana - 10
    return damage, new_mana

dmg, mana = cast_iceblast(5, 100)
print(f"Damage: {dmg}, Remainng Mana: {mana}")

