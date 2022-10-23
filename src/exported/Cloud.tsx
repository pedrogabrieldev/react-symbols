import IconCloudFill0Wght100Grad0Opsz48 from '../components/CloudFill0Wght100Grad0Opsz48'
import IconCloudFill0Wght200Grad0Opsz48 from '../components/CloudFill0Wght200Grad0Opsz48'
import IconCloudFill0Wght300Grad0Opsz48 from '../components/CloudFill0Wght300Grad0Opsz48'
import IconCloudFill0Wght400Grad0Opsz48 from '../components/CloudFill0Wght400Grad0Opsz48'
import IconCloudFill0Wght500Grad0Opsz48 from '../components/CloudFill0Wght500Grad0Opsz48'
import IconCloudFill0Wght600Grad0Opsz48 from '../components/CloudFill0Wght600Grad0Opsz48'
import IconCloudFill0Wght700Grad0Opsz48 from '../components/CloudFill0Wght700Grad0Opsz48'
import IconCloudFill1Wght100Grad0Opsz48 from '../components/CloudFill1Wght100Grad0Opsz48'
import IconCloudFill1Wght200Grad0Opsz48 from '../components/CloudFill1Wght200Grad0Opsz48'
import IconCloudFill1Wght300Grad0Opsz48 from '../components/CloudFill1Wght300Grad0Opsz48'
import IconCloudFill1Wght400Grad0Opsz48 from '../components/CloudFill1Wght400Grad0Opsz48'
import IconCloudFill1Wght500Grad0Opsz48 from '../components/CloudFill1Wght500Grad0Opsz48'
import IconCloudFill1Wght600Grad0Opsz48 from '../components/CloudFill1Wght600Grad0Opsz48'
import IconCloudFill1Wght700Grad0Opsz48 from '../components/CloudFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloud = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
