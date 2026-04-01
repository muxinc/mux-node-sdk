# Robots

## Jobs

Types:

- <code><a href="./src/resources/robots/jobs/jobs.ts">JobSummary</a></code>
- <code><a href="./src/resources/robots/jobs/jobs.ts">JobCancelResponse</a></code>

Methods:

- <code title="get /robots/v1/jobs">client.robots.jobs.<a href="./src/resources/robots/jobs/jobs.ts">list</a>({ ...params }) -> JobSummariesBasePage</code>
- <code title="delete /robots/v1/jobs/{JOB_ID}">client.robots.jobs.<a href="./src/resources/robots/jobs/jobs.ts">delete</a>(jobID) -> void</code>
- <code title="post /robots/v1/jobs/{JOB_ID}/cancel">client.robots.jobs.<a href="./src/resources/robots/jobs/jobs.ts">cancel</a>(jobID) -> JobCancelResponse</code>

### AskQuestions

Types:

- <code><a href="./src/resources/robots/jobs/ask-questions.ts">AskQuestionsJob</a></code>
- <code><a href="./src/resources/robots/jobs/ask-questions.ts">AskQuestionsJobParameters</a></code>

Methods:

- <code title="post /robots/v1/jobs/ask-questions">client.robots.jobs.askQuestions.<a href="./src/resources/robots/jobs/ask-questions.ts">create</a>({ ...params }) -> AskQuestionsJob</code>
- <code title="get /robots/v1/jobs/ask-questions/{JOB_ID}">client.robots.jobs.askQuestions.<a href="./src/resources/robots/jobs/ask-questions.ts">retrieve</a>(jobID) -> AskQuestionsJob</code>

### GenerateChapters

Types:

- <code><a href="./src/resources/robots/jobs/generate-chapters.ts">GenerateChaptersJob</a></code>

Methods:

- <code title="post /robots/v1/jobs/generate-chapters">client.robots.jobs.generateChapters.<a href="./src/resources/robots/jobs/generate-chapters.ts">create</a>({ ...params }) -> GenerateChaptersJob</code>
- <code title="get /robots/v1/jobs/generate-chapters/{JOB_ID}">client.robots.jobs.generateChapters.<a href="./src/resources/robots/jobs/generate-chapters.ts">retrieve</a>(jobID) -> GenerateChaptersJob</code>

### FindKeyMoments

Types:

- <code><a href="./src/resources/robots/jobs/find-key-moments.ts">FindKeyMomentsJob</a></code>

Methods:

- <code title="post /robots/v1/jobs/find-key-moments">client.robots.jobs.findKeyMoments.<a href="./src/resources/robots/jobs/find-key-moments.ts">create</a>({ ...params }) -> FindKeyMomentsJob</code>
- <code title="get /robots/v1/jobs/find-key-moments/{JOB_ID}">client.robots.jobs.findKeyMoments.<a href="./src/resources/robots/jobs/find-key-moments.ts">retrieve</a>(jobID) -> FindKeyMomentsJob</code>

### Moderate

Types:

- <code><a href="./src/resources/robots/jobs/moderate.ts">ModerateJob</a></code>

Methods:

- <code title="post /robots/v1/jobs/moderate">client.robots.jobs.moderate.<a href="./src/resources/robots/jobs/moderate.ts">create</a>({ ...params }) -> ModerateJob</code>
- <code title="get /robots/v1/jobs/moderate/{JOB_ID}">client.robots.jobs.moderate.<a href="./src/resources/robots/jobs/moderate.ts">retrieve</a>(jobID) -> ModerateJob</code>

### Summarize

Types:

- <code><a href="./src/resources/robots/jobs/summarize.ts">SummarizeJob</a></code>

Methods:

- <code title="post /robots/v1/jobs/summarize">client.robots.jobs.summarize.<a href="./src/resources/robots/jobs/summarize.ts">create</a>({ ...params }) -> SummarizeJob</code>
- <code title="get /robots/v1/jobs/summarize/{JOB_ID}">client.robots.jobs.summarize.<a href="./src/resources/robots/jobs/summarize.ts">retrieve</a>(jobID) -> SummarizeJob</code>

### TranslateCaptions

Types:

- <code><a href="./src/resources/robots/jobs/translate-captions.ts">TranslateCaptionsJob</a></code>

Methods:

- <code title="post /robots/v1/jobs/translate-captions">client.robots.jobs.translateCaptions.<a href="./src/resources/robots/jobs/translate-captions.ts">create</a>({ ...params }) -> TranslateCaptionsJob</code>
- <code title="get /robots/v1/jobs/translate-captions/{JOB_ID}">client.robots.jobs.translateCaptions.<a href="./src/resources/robots/jobs/translate-captions.ts">retrieve</a>(jobID) -> TranslateCaptionsJob</code>
