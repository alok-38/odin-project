puts "hello\tgoodbye"
puts "hello\ngoodbye"
puts 'hello\tgoodbye'
puts 'hello\ngoodbye'
puts "foo" + "bar"
puts "ant" + "bat" + "cat"
first_name = "Michael"
last_name = "Hartl"
puts first_name + " " + last_name
full_name = first_name + " " + last_name
puts "My full name is #{full_name}"
puts "Hello", "World", 123
print "Hello", " ", "World", 123
print "\n\n"
puts "badger".length
puts "".length
puts "".length == 0
puts "".empty?
puts "badger".empty?
puts "badger".empty?()
print "\n\n"
x = "ruby"
y = ""
if x.length == 0 && y.length == 0
  puts "Both strings are empty"
else
  puts "Atleast one of the string is nonempty"
end
print "\n\n"
if x.empty? && y.empty?
  puts "Both strings are empty"
else
  puts "Atleast one is nonempty"
end
print"\n\n"

animal = "HONEY BADGER DON'T CARE"
puts animal.downcase
print"\n\n"

puts animal

first_name = "Michael"
username = first_name.downcase
puts username
print "\n\n"
puts "#{username}@example.com"
print"\n\n"

last_name = "Hartle"
username = last_name.upcase
puts username
print "\n\n"


puts username.include? "alok"
print"\n\n"

soliloquy = "To be, or not to be, that is the question:"
puts soliloquy.include?("To be")
puts soliloquy.include?("non existant")

