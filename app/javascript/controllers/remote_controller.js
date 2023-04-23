import { Controller } from '@hotwired/stimulus'
import { post } from '@rails/request.js'
import Rails from "@rails/ujs"

export default class extends Controller {
  static values = { url: String }

  connect() {
    super.connect()
  }

  disconnect() {
    super.disconnect()
  }
}
