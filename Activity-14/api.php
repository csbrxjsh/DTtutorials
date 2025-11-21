<?php
header('Content-Type: application/json');

$jokes = [
  'general' => [
    'Why don’t skeletons fight each other? They don’t have the guts.',
    'I told my computer I needed a break, and it said “No problem, I’ll go to sleep.”'
  ],
  'programming' => [
    'There are 10 types of people: those who understand binary and those who don’t.',
    'A SQL query walks into a bar, walks up to two tables and asks: “Can I join you?”'
  ],
  'dad' => [
    'I only know 25 letters of the alphabet. I don’t know y.',
    'I’m reading a book on anti-gravity. It’s impossible to put down!'
  ]
];

$trivia = [
  'science' => [
    ['q' => 'What planet is known as the Red Planet?', 'a' => 'Mars'],
    ['q' => 'What gas do plants absorb from the atmosphere?', 'a' => 'Carbon dioxide']
  ],
  'history' => [
    ['q' => 'Who was the first President of the United States?', 'a' => 'George Washington'],
    ['q' => 'In which year did World War II end?', 'a' => '1945']
  ],
  'geography' => [
    ['q' => 'What is the largest ocean on Earth?', 'a' => 'Pacific Ocean'],
    ['q' => 'Which country has the most natural lakes?', 'a' => 'Canada']
  ],
  'sports' => [
    ['q' => 'How many players are on a soccer team on the field?', 'a' => '11'],
    ['q' => 'Which sport uses a shuttlecock?', 'a' => 'Badminton']
  ]
];

$type = $_GET['type'] ?? 'joke';
$category = $_GET['category'] ?? 'general';

function pickRandom($arr) {
  return $arr[array_rand($arr)];
}

if ($type === 'joke') {
  $pool = $jokes[$category] ?? $jokes['general'];
  echo json_encode(['type' => 'joke', 'category' => $category, 'joke' => pickRandom($pool)]);
  exit;
}

if ($type === 'trivia') {
  $pool = $trivia[$category] ?? $trivia['science'];
  $item = pickRandom($pool);
  echo json_encode(['type' => 'trivia', 'category' => $category, 'question' => $item['q'], 'answer' => $item['a']]);
  exit;
}

http_response_code(400);
echo json_encode(['error' => 'Invalid type. Use type=joke or type=trivia.']);
