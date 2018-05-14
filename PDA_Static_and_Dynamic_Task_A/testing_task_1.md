### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
# removed a semicolon from the card.rb file (line 7)

class CardGame
# amend indentation
# amend the name to: check_for_ace(card)
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end
# amend def name to: def
  dif highest_card(card1 card2)
  if card1.value > card2.value
# amend card.name to: card1
    return card.name
  else
# add a return to: card2
    card2
  end
end
# remove (or move to line 46) this: end
end

def self.cards_total(cards)
# amended to: total = 0
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end

#add an: end
```
