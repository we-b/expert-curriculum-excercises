class Name

  attr_accessor :email, :company

  def initialize(first_name, last_name, email, company)
    @first_name = first_name
    @last_name = last_name
    @email = email
    @company = company
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

end
