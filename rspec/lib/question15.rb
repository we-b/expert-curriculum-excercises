class Review

  @@review_count = 0

  def initialize(title)
    @title = title
    @@review_count += 1
  end

  def write_review(genre, impression)
    @genre = genre
    @impression = impression
    [@genre, @impression]
  end

  def show_review
    "ジャンル : #{@genre}, タイトル : #{@title}, 感想 : #{@impression}"
  end

  def self.get_review_count
    @@review_count
  end

end
