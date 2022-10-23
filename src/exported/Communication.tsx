import IconCommunicationFill0Wght100Grad0Opsz48 from '../components/CommunicationFill0Wght100Grad0Opsz48'
import IconCommunicationFill0Wght200Grad0Opsz48 from '../components/CommunicationFill0Wght200Grad0Opsz48'
import IconCommunicationFill0Wght300Grad0Opsz48 from '../components/CommunicationFill0Wght300Grad0Opsz48'
import IconCommunicationFill0Wght400Grad0Opsz48 from '../components/CommunicationFill0Wght400Grad0Opsz48'
import IconCommunicationFill0Wght500Grad0Opsz48 from '../components/CommunicationFill0Wght500Grad0Opsz48'
import IconCommunicationFill0Wght600Grad0Opsz48 from '../components/CommunicationFill0Wght600Grad0Opsz48'
import IconCommunicationFill0Wght700Grad0Opsz48 from '../components/CommunicationFill0Wght700Grad0Opsz48'
import IconCommunicationFill1Wght100Grad0Opsz48 from '../components/CommunicationFill1Wght100Grad0Opsz48'
import IconCommunicationFill1Wght200Grad0Opsz48 from '../components/CommunicationFill1Wght200Grad0Opsz48'
import IconCommunicationFill1Wght300Grad0Opsz48 from '../components/CommunicationFill1Wght300Grad0Opsz48'
import IconCommunicationFill1Wght400Grad0Opsz48 from '../components/CommunicationFill1Wght400Grad0Opsz48'
import IconCommunicationFill1Wght500Grad0Opsz48 from '../components/CommunicationFill1Wght500Grad0Opsz48'
import IconCommunicationFill1Wght600Grad0Opsz48 from '../components/CommunicationFill1Wght600Grad0Opsz48'
import IconCommunicationFill1Wght700Grad0Opsz48 from '../components/CommunicationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCommunication = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCommunicationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCommunicationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCommunicationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCommunicationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCommunicationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCommunicationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCommunicationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCommunicationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCommunicationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCommunicationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCommunicationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCommunicationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCommunicationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCommunicationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
