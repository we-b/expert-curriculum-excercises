class Run

  @@total_distance = 0
  @@member_count = 0

  def initialize(name)
    @name = name
    @distance = 0
    @@member_count += 1
  end

  def distance(distance)
    @distance += distance
    @@total_distance += distance
    "#{@name}さんは #{@distance} km 走りました。"
  end

  def self.count
    @@member_count
  end

  def self.total_distance
    @@total_distance
  end

  def self.result
    "#{count}人で、合計#{total_distance} km 走りました。"
  end

end
