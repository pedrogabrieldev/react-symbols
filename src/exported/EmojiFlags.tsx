import IconEmojiFlagsFill0Wght100Grad0Opsz48 from '../components/EmojiFlagsFill0Wght100Grad0Opsz48'
import IconEmojiFlagsFill0Wght200Grad0Opsz48 from '../components/EmojiFlagsFill0Wght200Grad0Opsz48'
import IconEmojiFlagsFill0Wght300Grad0Opsz48 from '../components/EmojiFlagsFill0Wght300Grad0Opsz48'
import IconEmojiFlagsFill0Wght400Grad0Opsz48 from '../components/EmojiFlagsFill0Wght400Grad0Opsz48'
import IconEmojiFlagsFill0Wght500Grad0Opsz48 from '../components/EmojiFlagsFill0Wght500Grad0Opsz48'
import IconEmojiFlagsFill0Wght600Grad0Opsz48 from '../components/EmojiFlagsFill0Wght600Grad0Opsz48'
import IconEmojiFlagsFill0Wght700Grad0Opsz48 from '../components/EmojiFlagsFill0Wght700Grad0Opsz48'
import IconEmojiFlagsFill1Wght100Grad0Opsz48 from '../components/EmojiFlagsFill1Wght100Grad0Opsz48'
import IconEmojiFlagsFill1Wght200Grad0Opsz48 from '../components/EmojiFlagsFill1Wght200Grad0Opsz48'
import IconEmojiFlagsFill1Wght300Grad0Opsz48 from '../components/EmojiFlagsFill1Wght300Grad0Opsz48'
import IconEmojiFlagsFill1Wght400Grad0Opsz48 from '../components/EmojiFlagsFill1Wght400Grad0Opsz48'
import IconEmojiFlagsFill1Wght500Grad0Opsz48 from '../components/EmojiFlagsFill1Wght500Grad0Opsz48'
import IconEmojiFlagsFill1Wght600Grad0Opsz48 from '../components/EmojiFlagsFill1Wght600Grad0Opsz48'
import IconEmojiFlagsFill1Wght700Grad0Opsz48 from '../components/EmojiFlagsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmojiFlags = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmojiFlagsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmojiFlagsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmojiFlagsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmojiFlagsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmojiFlagsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmojiFlagsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmojiFlagsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmojiFlagsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmojiFlagsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmojiFlagsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmojiFlagsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmojiFlagsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmojiFlagsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmojiFlagsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
