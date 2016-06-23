class Money

  def initialize(change)
    @change = change
  end

  def change_in?
    if @change < 1000
      'coins'
    else
      'bill'
    end
  end

end
