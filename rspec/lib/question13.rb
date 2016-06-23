class Run

  @@total_distance = 0
  @@member_count = 0

  def ___(name)
    @name = ___
    @distance = 0
    @@member_count ___ 1
  end

  def ___(___)
    @distance += distance
    @@total_distance += distance
    "___さんは ___ km 走りました。"
  end

  def self.count
    ___
  end

  def self.total_distance
    ___
  end

  def ___
    "#{count}人で、合計#{total_distance} km 走りました。"
  end

end
