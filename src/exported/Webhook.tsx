import IconWebhookFill0Wght100Grad0Opsz48 from '../components/WebhookFill0Wght100Grad0Opsz48'
import IconWebhookFill0Wght200Grad0Opsz48 from '../components/WebhookFill0Wght200Grad0Opsz48'
import IconWebhookFill0Wght300Grad0Opsz48 from '../components/WebhookFill0Wght300Grad0Opsz48'
import IconWebhookFill0Wght400Grad0Opsz48 from '../components/WebhookFill0Wght400Grad0Opsz48'
import IconWebhookFill0Wght500Grad0Opsz48 from '../components/WebhookFill0Wght500Grad0Opsz48'
import IconWebhookFill0Wght600Grad0Opsz48 from '../components/WebhookFill0Wght600Grad0Opsz48'
import IconWebhookFill0Wght700Grad0Opsz48 from '../components/WebhookFill0Wght700Grad0Opsz48'
import IconWebhookFill1Wght100Grad0Opsz48 from '../components/WebhookFill1Wght100Grad0Opsz48'
import IconWebhookFill1Wght200Grad0Opsz48 from '../components/WebhookFill1Wght200Grad0Opsz48'
import IconWebhookFill1Wght300Grad0Opsz48 from '../components/WebhookFill1Wght300Grad0Opsz48'
import IconWebhookFill1Wght400Grad0Opsz48 from '../components/WebhookFill1Wght400Grad0Opsz48'
import IconWebhookFill1Wght500Grad0Opsz48 from '../components/WebhookFill1Wght500Grad0Opsz48'
import IconWebhookFill1Wght600Grad0Opsz48 from '../components/WebhookFill1Wght600Grad0Opsz48'
import IconWebhookFill1Wght700Grad0Opsz48 from '../components/WebhookFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWebhook = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWebhookFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWebhookFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWebhookFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWebhookFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWebhookFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWebhookFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWebhookFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWebhookFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWebhookFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWebhookFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWebhookFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWebhookFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWebhookFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWebhookFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
