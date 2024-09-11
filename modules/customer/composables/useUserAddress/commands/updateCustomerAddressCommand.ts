import { CustomQuery, CustomHeaders, UseContextReturn } from '~/types/core';
import { CustomerAddressInput } from '~/modules/GraphQL/types';

export const updateCustomerAddressCommand = {
  execute: async (context: UseContextReturn, params: {
    addressId: number;
    input: CustomerAddressInput;
    id?: number;
  }, customQuery: CustomQuery, customHeaders: CustomHeaders) => {
    const { data } = await context.app.$vsf.$magento.api.updateCustomerAddress({ ...params, id: params.addressId || params.id }, customQuery, customHeaders);

    return data?.updateCustomerAddress ?? {};
  },
};
