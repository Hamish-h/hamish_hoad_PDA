#!/usr/bin/env ruby
require('minitest/autorun')
require('minitest/rg')

require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class CardGameTest < MiniTest::Test

  def setup()
    @card1 = Card.new("Clubs", 1)
    @card2 = Card.new("Clubs", 2)
    # cards = [@card1, @card2]
    total = 0
  end

  def test_check_for_ace
    assert_equal(1, @card1.value())
  end

  def test_highest_card
    assert_equal(2, @card2.value())
  end

  def test_total_cards
    assert_equal(total, 3)
  end

end
