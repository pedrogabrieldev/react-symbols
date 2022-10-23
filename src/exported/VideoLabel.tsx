import IconVideoLabelFill0Wght100Grad0Opsz48 from '../components/VideoLabelFill0Wght100Grad0Opsz48'
import IconVideoLabelFill0Wght200Grad0Opsz48 from '../components/VideoLabelFill0Wght200Grad0Opsz48'
import IconVideoLabelFill0Wght300Grad0Opsz48 from '../components/VideoLabelFill0Wght300Grad0Opsz48'
import IconVideoLabelFill0Wght400Grad0Opsz48 from '../components/VideoLabelFill0Wght400Grad0Opsz48'
import IconVideoLabelFill0Wght500Grad0Opsz48 from '../components/VideoLabelFill0Wght500Grad0Opsz48'
import IconVideoLabelFill0Wght600Grad0Opsz48 from '../components/VideoLabelFill0Wght600Grad0Opsz48'
import IconVideoLabelFill0Wght700Grad0Opsz48 from '../components/VideoLabelFill0Wght700Grad0Opsz48'
import IconVideoLabelFill1Wght100Grad0Opsz48 from '../components/VideoLabelFill1Wght100Grad0Opsz48'
import IconVideoLabelFill1Wght200Grad0Opsz48 from '../components/VideoLabelFill1Wght200Grad0Opsz48'
import IconVideoLabelFill1Wght300Grad0Opsz48 from '../components/VideoLabelFill1Wght300Grad0Opsz48'
import IconVideoLabelFill1Wght400Grad0Opsz48 from '../components/VideoLabelFill1Wght400Grad0Opsz48'
import IconVideoLabelFill1Wght500Grad0Opsz48 from '../components/VideoLabelFill1Wght500Grad0Opsz48'
import IconVideoLabelFill1Wght600Grad0Opsz48 from '../components/VideoLabelFill1Wght600Grad0Opsz48'
import IconVideoLabelFill1Wght700Grad0Opsz48 from '../components/VideoLabelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideoLabel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideoLabelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideoLabelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideoLabelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideoLabelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideoLabelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideoLabelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideoLabelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideoLabelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideoLabelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideoLabelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideoLabelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideoLabelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideoLabelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideoLabelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
