import IconCampaignFill0Wght100Grad0Opsz48 from '../components/CampaignFill0Wght100Grad0Opsz48'
import IconCampaignFill0Wght200Grad0Opsz48 from '../components/CampaignFill0Wght200Grad0Opsz48'
import IconCampaignFill0Wght300Grad0Opsz48 from '../components/CampaignFill0Wght300Grad0Opsz48'
import IconCampaignFill0Wght400Grad0Opsz48 from '../components/CampaignFill0Wght400Grad0Opsz48'
import IconCampaignFill0Wght500Grad0Opsz48 from '../components/CampaignFill0Wght500Grad0Opsz48'
import IconCampaignFill0Wght600Grad0Opsz48 from '../components/CampaignFill0Wght600Grad0Opsz48'
import IconCampaignFill0Wght700Grad0Opsz48 from '../components/CampaignFill0Wght700Grad0Opsz48'
import IconCampaignFill1Wght100Grad0Opsz48 from '../components/CampaignFill1Wght100Grad0Opsz48'
import IconCampaignFill1Wght200Grad0Opsz48 from '../components/CampaignFill1Wght200Grad0Opsz48'
import IconCampaignFill1Wght300Grad0Opsz48 from '../components/CampaignFill1Wght300Grad0Opsz48'
import IconCampaignFill1Wght400Grad0Opsz48 from '../components/CampaignFill1Wght400Grad0Opsz48'
import IconCampaignFill1Wght500Grad0Opsz48 from '../components/CampaignFill1Wght500Grad0Opsz48'
import IconCampaignFill1Wght600Grad0Opsz48 from '../components/CampaignFill1Wght600Grad0Opsz48'
import IconCampaignFill1Wght700Grad0Opsz48 from '../components/CampaignFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCampaign = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCampaignFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCampaignFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCampaignFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCampaignFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCampaignFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCampaignFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCampaignFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCampaignFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCampaignFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCampaignFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCampaignFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCampaignFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCampaignFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCampaignFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
