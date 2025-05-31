const questions = [
  // E vs I
  {
    text: '나는 새로운 사람들과 쉽게 친해지는 편이다.',
    options: [
      { text: '그렇다', type: 'E' },
      { text: '아니다', type: 'I' },
    ],
    dimension: 'EI',
  },
  {
    text: '나는 혼자만의 시간을 갖는 것이 매우 중요하다.',
    options: [
      { text: '그렇다', type: 'I' },
      { text: '아니다', type: 'E' },
    ],
    dimension: 'EI',
  },
  {
    text: '나는 파티나 모임에서 에너지를 얻는다.',
    options: [
      { text: '그렇다', type: 'E' },
      { text: '아니다', type: 'I' },
    ],
    dimension: 'EI',
  },
  {
    text: '다른 사람들과 함께 있는 시간이 피곤하게 느껴질 때가 많다.',
    options: [
      { text: '그렇다', type: 'I' },
      { text: '아니다', type: 'E' },
    ],
    dimension: 'EI',
  },
  {
    text: '나는 생각이 정리되기 전에 말부터 나오는 경우가 많다.',
    options: [
      { text: '그렇다', type: 'E' },
      { text: '아니다', type: 'I' },
    ],
    dimension: 'EI',
  },

  // S vs N
  {
    text: '나는 설명을 들을 때 구체적인 예시가 있어야 이해가 잘 된다.',
    options: [
      { text: '그렇다', type: 'S' },
      { text: '아니다', type: 'N' },
    ],
    dimension: 'SN',
  },
  {
    text: '나는 상상력과 아이디어를 떠올리는 것을 좋아한다.',
    options: [
      { text: '그렇다', type: 'N' },
      { text: '아니다', type: 'S' },
    ],
    dimension: 'SN',
  },
  {
    text: '나는 현실적인 조언을 주는 사람이 좋다.',
    options: [
      { text: '그렇다', type: 'S' },
      { text: '아니다', type: 'N' },
    ],
    dimension: 'SN',
  },
  {
    text: '나는 복잡한 개념이나 이론을 이해하는 데 흥미를 느낀다.',
    options: [
      { text: '그렇다', type: 'N' },
      { text: '아니다', type: 'S' },
    ],
    dimension: 'SN',
  },
  {
    text: '나는 과거 경험을 기반으로 판단한다.',
    options: [
      { text: '그렇다', type: 'S' },
      { text: '아니다', type: 'N' },
    ],
    dimension: 'SN',
  },

  // T vs F
  {
    text: '나는 감정보다 사실과 논리를 우선시한다.',
    options: [
      { text: '그렇다', type: 'T' },
      { text: '아니다', type: 'F' },
    ],
    dimension: 'TF',
  },
  {
    text: '나는 다른 사람의 기분을 상하지 않게 하려 애쓴다.',
    options: [
      { text: '그렇다', type: 'F' },
      { text: '아니다', type: 'T' },
    ],
    dimension: 'TF',
  },
  {
    text: '나는 결정을 내릴 때 분석과 효율성을 고려한다.',
    options: [
      { text: '그렇다', type: 'T' },
      { text: '아니다', type: 'F' },
    ],
    dimension: 'TF',
  },
  {
    text: '나는 누군가 힘들다고 말하면 공감부터 든다.',
    options: [
      { text: '그렇다', type: 'F' },
      { text: '아니다', type: 'T' },
    ],
    dimension: 'TF',
  },
  {
    text: '나는 논쟁에서 감정보다는 사실이 중요하다.',
    options: [
      { text: '그렇다', type: 'T' },
      { text: '아니다', type: 'F' },
    ],
    dimension: 'TF',
  },

  // J vs P
  {
    text: '나는 할 일을 미리 계획해두는 편이다.',
    options: [
      { text: '그렇다', type: 'J' },
      { text: '아니다', type: 'P' },
    ],
    dimension: 'JP',
  },
  {
    text: '나는 일정한 계획 없이 유연하게 행동하는 것을 좋아한다.',
    options: [
      { text: '그렇다', type: 'P' },
      { text: '아니다', type: 'J' },
    ],
    dimension: 'JP',
  },
  {
    text: '나는 마감 전에 미리 일을 끝내려고 한다.',
    options: [
      { text: '그렇다', type: 'J' },
      { text: '아니다', type: 'P' },
    ],
    dimension: 'JP',
  },
  {
    text: '나는 마감 직전에 집중력이 생기는 것 같다.',
    options: [
      { text: '그렇다', type: 'P' },
      { text: '아니다', type: 'J' },
    ],
    dimension: 'JP',
  },
  {
    text: '나는 계획을 지키지 못하면 스트레스를 받는다.',
    options: [
      { text: '그렇다', type: 'J' },
      { text: '아니다', type: 'P' },
    ],
    dimension: 'JP',
  },
  // 보너스(복합적인 질문)
  {
    text: '나는 계획대로 일이 흘러가는 걸 좋아하면서도 때때로 충동적인 행동을 한다.',
    options: [
      { text: '그렇다', type: 'P' },
      { text: '아니다', type: 'J' },
    ],
    dimension: 'JP',
  },
  {
    text: '나는 나서기보다 조용히 주변을 관찰하는 것을 선호한다.',
    options: [
      { text: '그렇다', type: 'I' },
      { text: '아니다', type: 'E' },
    ],
    dimension: 'EI',
  },
  {
    text: '나는 세세한 지시보다 큰 그림과 목표가 더 중요하다고 느낀다.',
    options: [
      { text: '그렇다', type: 'N' },
      { text: '아니다', type: 'S' },
    ],
    dimension: 'SN',
  },
  {
    text: '나는 감정보다 명확한 기준과 룰을 따르는 걸 선호한다.',
    options: [
      { text: '그렇다', type: 'T' },
      { text: '아니다', type: 'F' },
    ],
    dimension: 'TF',
  },
  {
    text: '나는 즉흥적인 상황에서도 잘 적응한다.',
    options: [
      { text: '그렇다', type: 'P' },
      { text: '아니다', type: 'J' },
    ],
    dimension: 'JP',
  },
]

export default questions
