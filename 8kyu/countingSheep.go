// https://www.codewars.com/kata/54edbc7200b811e956000556/train/go

package kata

func CountSheeps(numbers []bool) int {
	var count int
	for i := range numbers {
		if numbers[i] == false {
			continue
		}
		count++
	}
	return count
}
