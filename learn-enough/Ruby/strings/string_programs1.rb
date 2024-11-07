puts 'This is a single quited string'
puts "This is a double quoted string"
print "Printing using print!"
print "\n\n"
my_string = "This is my string"
puts my_string
# String Concatenation
puts "Sammy" + " " + "shark"
my_age = 40
my_name = "Sammy"
puts "I'm #{my_name} and I turned #{my_age}"
print "\n\n"
# Strings and integers
my_name = "Sammy the Shark"
my_number = 27
puts "#{my_name} #{my_number}"
print "\n\n"
puts "#{my_name} #{my_number}".to_s
print "\n\n"
# Quoting
puts "Sammy says, \"I'm a happy shark!\""
print "\n\n"
puts %$Sammy says, "I'm a happy shark!"$
print "\n\n"
droplets = 5
puts %$Sammy says, I have #{droplets} droplets.$
print "\n\n"
puts %Q{Sammy says, "I just created #{droplets + 1} droplets!"}
print "\n\n"
# Long strings and new lines
output = "This is\na string\nwith newline"
puts output
print "\n\n"
# You can also use any of the alternate string syntaxes to create multiline strings:
output = %{This is a
           longer string
           with newlines
}
puts output
print "\n\n"
# Heredoc
output = <<-END
This is a
longer string
with newlines
END
puts output
print "\n\n"
# squiggly heredoc”
output = <<~END
This is a
longer string
with newlines
and the code is intended
but the output is not.
END
print "\n\n"
# String Replication
puts "Sammy" * 9
print "\n\n"
# ASCII art
puts "=" * 15
puts "| Hello World |"
puts "=" * 15
print "\n\n"

