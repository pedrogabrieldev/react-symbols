import IconTopicFill0Wght100Grad0Opsz48 from '../components/TopicFill0Wght100Grad0Opsz48'
import IconTopicFill0Wght200Grad0Opsz48 from '../components/TopicFill0Wght200Grad0Opsz48'
import IconTopicFill0Wght300Grad0Opsz48 from '../components/TopicFill0Wght300Grad0Opsz48'
import IconTopicFill0Wght400Grad0Opsz48 from '../components/TopicFill0Wght400Grad0Opsz48'
import IconTopicFill0Wght500Grad0Opsz48 from '../components/TopicFill0Wght500Grad0Opsz48'
import IconTopicFill0Wght600Grad0Opsz48 from '../components/TopicFill0Wght600Grad0Opsz48'
import IconTopicFill0Wght700Grad0Opsz48 from '../components/TopicFill0Wght700Grad0Opsz48'
import IconTopicFill1Wght100Grad0Opsz48 from '../components/TopicFill1Wght100Grad0Opsz48'
import IconTopicFill1Wght200Grad0Opsz48 from '../components/TopicFill1Wght200Grad0Opsz48'
import IconTopicFill1Wght300Grad0Opsz48 from '../components/TopicFill1Wght300Grad0Opsz48'
import IconTopicFill1Wght400Grad0Opsz48 from '../components/TopicFill1Wght400Grad0Opsz48'
import IconTopicFill1Wght500Grad0Opsz48 from '../components/TopicFill1Wght500Grad0Opsz48'
import IconTopicFill1Wght600Grad0Opsz48 from '../components/TopicFill1Wght600Grad0Opsz48'
import IconTopicFill1Wght700Grad0Opsz48 from '../components/TopicFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTopic = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTopicFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTopicFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTopicFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTopicFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTopicFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTopicFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTopicFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTopicFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTopicFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTopicFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTopicFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTopicFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTopicFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTopicFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
