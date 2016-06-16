class Name

  def initialize(first_name, last_name, email, company)
    @first_name = first_name
    @last_name = last_name
    @email = email
    @company = company
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  def my_email
    @email
  end

  def my_company
    @company
  end

end
