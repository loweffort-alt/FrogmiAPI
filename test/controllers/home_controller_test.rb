require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  #puts "aaaaaaaaaaaaaaaaaaaaaaaa$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
  test "should get index" do
    puts "aaaaaaaaaaaaaaaaaaaaaaaa$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
    get home_index_url
    assert_response :success
  end
end
