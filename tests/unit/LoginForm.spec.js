import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('Emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    // const input = wrapper.find('input[type="text"]') // not a good idea
    const input = wrapper.find('[data-testid="name-input"]') // much better

    input.setValue('Luis Martinez')
    wrapper.trigger('submit')

    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)
    const expectedPayload = { name: 'Luis Martinez' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
