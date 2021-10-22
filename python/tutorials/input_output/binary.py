with open('tutorials/input_output/binary', 'bw') as write_bin_file:
    write_bin_file.write(bytes(range(13)))


with open('tutorials/input_output/binary', 'br') as read_bin_file:
    for line in read_bin_file.readlines():
        print(line)

a = 65534
b = 65535
c = 65536
d = 2998302

with open('tutorials/input_output/binary2', 'bw') as write_bin_file_2:
    write_bin_file_2.write(a.to_bytes(2, 'big')) 
    write_bin_file_2.write(b.to_bytes(2, 'big'))
    write_bin_file_2.write(c.to_bytes(4, 'big'))
    write_bin_file_2.write(d.to_bytes(4, 'big'))
    write_bin_file_2.write(d.to_bytes(4, 'little'))

# Big and Little refer to which bytes are stored first, big largest to smallest and vice versa for little

with open('tutorials/input_output/binary2', 'br') as write_bin_file_3:
    e = int.from_bytes(write_bin_file_3.read(2), 'big')
    print(e)
    f = int.from_bytes(write_bin_file_3.read(2), 'big')
    print(f)
    g = int.from_bytes(write_bin_file_3.read(4), 'big')
    print(g)
    h = int.from_bytes(write_bin_file_3.read(4), 'big')
    print(h)
    i = int.from_bytes(write_bin_file_3.read(4), 'little')
    print(i)