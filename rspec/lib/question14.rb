class Game

  attr_reader :status

  def initialize(name, status)
    @name = name
    @status = status
  end

  def challenge(destiny_number)
    if destiny_number == 1
      happy_moment
    else
      sad_moment
    end
  end

  def happy_moment
    if @status == 5
      'あなたは王国を支配することに成功しました！おめでとうございます！'
    else
      "ランクアップした！"
      @status += 1
    end
  end

  def sad_moment
    if @status == 0
      'あなたは王国から追い出されました...'
    else
      "ランクダウンした..."
      @status -= 1
    end
  end

end
