// import type { QuestionGenre } from './ResponseType'
import {
  generateSubmission,
  generateWebSocketMessage
} from '#/utils/generateDummyData'
import { isDevelop } from './GlobalSettings'
import type { SubmissionRaw } from './ResponseType'
import mitt from 'mitt'
import { timeAdjuster } from '#/system/events/TimeAdjuster'
import { eventStarted } from '#/system/events/EventStarted'
import { eventEnded } from '#/system/events/EventEnded'
import { userCreated, UserCreatedData } from '#/system/events/UserCreated'
import { problemSolved, ProblemSolvedData } from '#/system/events/ProblemSolved'
import { rankingUpdated } from '#/system/events/RankingUpdated'
import type { UserUpdatedData } from '#/system/events/UserUpdated'
import { userUpdated } from '#/system/events/UserUpdated'
import { scoreRecalculated } from '#/system/events/ScoreRecalculated'

export type VisualizerEvents = {
  initialized: void
  submit: SubmissionRaw
  start: void
  end: void
  recalculatestart: void
  recalculateend: void
  disconnect: void
}

export const EventEmitter = mitt<VisualizerEvents>()

export const initializeEventEmitter = () => {
  try {
    const websocket = new WebSocket(`ws://${location.host}/ws/visualizer`)
    websocket.addEventListener('message', messageHandler.bind(this))
    websocket.addEventListener('error', e => {
      console.error(e)
      EventEmitter.emit('disconnect')
    })
    // test
    if (isDevelop) testEvent()
  } catch (e) {
    console.log(e)
  }
}

export const emitInitializedEvent = () => {
  EventEmitter.emit('initialized')
}

const testEvent = () => {
  setInterval(() => {
    messageHandler(
      generateWebSocketMessage({
        data: '{ type: 7 }'
      })
    )
  }, 30000)
  setInterval(() => {
    messageHandler(
      generateWebSocketMessage({
        data: '{ type: 6 }'
      })
    )
  }, 300000)
  setInterval(() => {
    messageHandler(
      generateWebSocketMessage({
        data: `{ type: 2, data: "${JSON.stringify(generateSubmission())}"}`
      })
    )
  }, 3000)
}

const messageHandler = (event: MessageEvent<string>) => {
  if (!event.data) return
  const { type, data } = JSON.parse(event.data as string)
  console.log(type, data, event.data)
  if (!type) return
  switch (Number(type)) {
    case 0: {
      timeAdjuster()
      break
    }
    case 1: {
      userCreated(data as UserCreatedData)
      break
    }
    case 2: {
      problemSolved(data as ProblemSolvedData)
      break
    }
    case 3: {
      rankingUpdated()
      break
    }
    case 4: {
      userUpdated(data as UserUpdatedData)
      break
    }
    case 5: {
      eventStarted()
      break
    }
    case 6: {
      eventEnded()
      break
    }
    case 7: {
      scoreRecalculated()
      break
    }
  }
}
