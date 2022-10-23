import IconCardMembershipFill0Wght100Grad0Opsz48 from '../components/CardMembershipFill0Wght100Grad0Opsz48'
import IconCardMembershipFill0Wght200Grad0Opsz48 from '../components/CardMembershipFill0Wght200Grad0Opsz48'
import IconCardMembershipFill0Wght300Grad0Opsz48 from '../components/CardMembershipFill0Wght300Grad0Opsz48'
import IconCardMembershipFill0Wght400Grad0Opsz48 from '../components/CardMembershipFill0Wght400Grad0Opsz48'
import IconCardMembershipFill0Wght500Grad0Opsz48 from '../components/CardMembershipFill0Wght500Grad0Opsz48'
import IconCardMembershipFill0Wght600Grad0Opsz48 from '../components/CardMembershipFill0Wght600Grad0Opsz48'
import IconCardMembershipFill0Wght700Grad0Opsz48 from '../components/CardMembershipFill0Wght700Grad0Opsz48'
import IconCardMembershipFill1Wght100Grad0Opsz48 from '../components/CardMembershipFill1Wght100Grad0Opsz48'
import IconCardMembershipFill1Wght200Grad0Opsz48 from '../components/CardMembershipFill1Wght200Grad0Opsz48'
import IconCardMembershipFill1Wght300Grad0Opsz48 from '../components/CardMembershipFill1Wght300Grad0Opsz48'
import IconCardMembershipFill1Wght400Grad0Opsz48 from '../components/CardMembershipFill1Wght400Grad0Opsz48'
import IconCardMembershipFill1Wght500Grad0Opsz48 from '../components/CardMembershipFill1Wght500Grad0Opsz48'
import IconCardMembershipFill1Wght600Grad0Opsz48 from '../components/CardMembershipFill1Wght600Grad0Opsz48'
import IconCardMembershipFill1Wght700Grad0Opsz48 from '../components/CardMembershipFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCardMembership = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCardMembershipFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCardMembershipFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCardMembershipFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCardMembershipFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCardMembershipFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCardMembershipFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCardMembershipFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCardMembershipFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCardMembershipFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCardMembershipFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCardMembershipFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCardMembershipFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCardMembershipFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCardMembershipFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
