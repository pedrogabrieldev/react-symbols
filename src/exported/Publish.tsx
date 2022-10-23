import IconPublishFill0Wght100Grad0Opsz48 from '../components/PublishFill0Wght100Grad0Opsz48'
import IconPublishFill0Wght200Grad0Opsz48 from '../components/PublishFill0Wght200Grad0Opsz48'
import IconPublishFill0Wght300Grad0Opsz48 from '../components/PublishFill0Wght300Grad0Opsz48'
import IconPublishFill0Wght400Grad0Opsz48 from '../components/PublishFill0Wght400Grad0Opsz48'
import IconPublishFill0Wght500Grad0Opsz48 from '../components/PublishFill0Wght500Grad0Opsz48'
import IconPublishFill0Wght600Grad0Opsz48 from '../components/PublishFill0Wght600Grad0Opsz48'
import IconPublishFill0Wght700Grad0Opsz48 from '../components/PublishFill0Wght700Grad0Opsz48'
import IconPublishFill1Wght100Grad0Opsz48 from '../components/PublishFill1Wght100Grad0Opsz48'
import IconPublishFill1Wght200Grad0Opsz48 from '../components/PublishFill1Wght200Grad0Opsz48'
import IconPublishFill1Wght300Grad0Opsz48 from '../components/PublishFill1Wght300Grad0Opsz48'
import IconPublishFill1Wght400Grad0Opsz48 from '../components/PublishFill1Wght400Grad0Opsz48'
import IconPublishFill1Wght500Grad0Opsz48 from '../components/PublishFill1Wght500Grad0Opsz48'
import IconPublishFill1Wght600Grad0Opsz48 from '../components/PublishFill1Wght600Grad0Opsz48'
import IconPublishFill1Wght700Grad0Opsz48 from '../components/PublishFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPublish = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPublishFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPublishFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPublishFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPublishFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPublishFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPublishFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPublishFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPublishFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPublishFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPublishFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPublishFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPublishFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPublishFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPublishFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
