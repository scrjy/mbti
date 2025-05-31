import React, { useState, useEffect } from 'react'
import allQuestions from './data/questions'
import Question from './components/Question'
import Result from './components/Result'
import './App.css'

// 랜덤 질문 추출 함수
function getRandomQuestionsByCategory(allQs) {
  const categories = [
    ['E', 'I'],
    ['S', 'N'],
    ['T', 'F'],
    ['J', 'P'],
  ]

  const selectedQuestions = []

  categories.forEach(([type1, type2]) => {
    // type1, type2 각각 3개씩 뽑기
    const qType1 = allQs.filter((q) =>
      q.options.some((opt) => opt.type === type1)
    )
    const qType2 = allQs.filter((q) =>
      q.options.some((opt) => opt.type === type2)
    )

    selectedQuestions.push(...shuffle(qType1).slice(0, 3))
    selectedQuestions.push(...shuffle(qType2).slice(0, 3))
  })

  return shuffle(selectedQuestions).slice(0, 12)
}

function shuffle(array) {
  return [...array].sort(() => 0.5 - Math.random())
}

function App() {
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([]) // 답변 기록을 배열로 저장
  const [score, setScore] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  })
  const [result, setResult] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  // 컴포넌트 마운트 시 질문 8~12개 랜덤 선택
  useEffect(() => {
    const selected = getRandomQuestionsByCategory(allQuestions)
    setQuestions(selected)
  }, [])

  // 결과가 생성되었을 때 한 번만 alert 띄우기
  useEffect(() => {
    if (result && !showAlert) {
      alert('🎉 질문이 모두 끝났어요!')
      setShowAlert(true)
    }
  }, [result, showAlert])

  // 답변 클릭 시 처리
  const handleAnswer = (type) => {
    // 현재 질문에 답변 추가 및 점수 업데이트
    setAnswers((prev) => {
      const newAnswers = [...prev]
      newAnswers[current] = type // 현재 질문 인덱스에 답변 저장

      // 점수 계산을 위해 현재 점수에서 이전에 저장된 답변 타입 있으면 점수 빼기
      setScore((prevScore) => {
        const newScore = { ...prevScore }
        if (prev[current]) {
          newScore[prev[current]] = Math.max(0, newScore[prev[current]] - 1)
        }
        newScore[type] = (newScore[type] || 0) + 1
        return newScore
      })

      // 다음 질문 혹은 결과 계산
      if (current + 1 >= questions.length) {
        // MBTI 계산
        setResult(
          (score.E + (type === 'E' ? 1 : 0) >= score.I + (type === 'I' ? 1 : 0)
            ? 'E'
            : 'I') +
            (score.S + (type === 'S' ? 1 : 0) >=
            score.N + (type === 'N' ? 1 : 0)
              ? 'S'
              : 'N') +
            (score.T + (type === 'T' ? 1 : 0) >=
            score.F + (type === 'F' ? 1 : 0)
              ? 'T'
              : 'F') +
            (score.J + (type === 'J' ? 1 : 0) >=
            score.P + (type === 'P' ? 1 : 0)
              ? 'J'
              : 'P')
        )
      } else {
        setCurrent(current + 1)
      }

      return newAnswers
    })
  }

  // 이전 버튼 클릭 시 처리
  const handlePrev = () => {
    if (current === 0) return // 첫 질문일 때 이전 이동 불가

    // 이전 질문 인덱스로 이동 및 점수 수정
    setCurrent((prevCurrent) => prevCurrent - 1)

    setScore((prevScore) => {
      const newScore = { ...prevScore }
      const prevAnswer = answers[current - 1]
      if (prevAnswer) {
        newScore[prevAnswer] = Math.max(0, newScore[prevAnswer] - 1)
      }
      return newScore
    })

    // 결과 초기화 (결과가 나왔던 상태에서 이전 버튼 누르면 결과 초기화)
    if (result) setResult(null)
    if (showAlert) setShowAlert(false)
  }

  if (questions.length === 0) return <div>로딩 중...</div>

  return (
    <div>
      <h1>간단한 MBTI 검사</h1>

      {!result ? (
        <>
          <Question
            question={questions[current]}
            onAnswer={handleAnswer}
            selectedType={answers[current]} // 선택된 답변 표시 (Question 컴포넌트가 이걸 반영하도록 수정 필요)
          />
          <div style={{ marginTop: '20px' }}>
            <button
              className="prev-btn"
              onClick={handlePrev}
              disabled={current === 0}
            >
              이전
            </button>
          </div>
        </>
      ) : (
        <Result result={result} />
      )}
    </div>
  )
}

export default App
