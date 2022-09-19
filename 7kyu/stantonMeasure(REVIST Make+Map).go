//https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/train/go
/*
	REVIEW: Other solutions say use "make" a map[int]int
*/
package kata

func StantonMeasure(arr []int) int {
	var countOf1s int = 0
	for i := 0; i < len(arr); i++ {
		if arr[i] == 1 {
			countOf1s++
		}
	}
	var countOfNs int = 0
	for j := 0; j < len(arr); j++ {
		if arr[j] == countOf1s {
			countOfNs++
		}
	}
	return countOfNs
}
