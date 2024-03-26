import { defineRule } from 'vee-validate'
import { required, integer } from '@vee-validate/rules'

defineRule('required', required)
defineRule('integer', integer)
