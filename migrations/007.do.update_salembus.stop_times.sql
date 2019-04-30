update stop_times set arrival_time = replace(arrival_time,' ','0')
where arrival_time like ' %';